import type {
  Coordinates,
  GestureEvent,
  MarkerPosition,
  PanGesture,
  SelectedLocation,
} from "@/types/address";
import { getAddressByCoordinates } from "@/utils/data/addressDatabase";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useCallback, useRef, useState } from "react";
import type { PanResponderInstance } from "react-native";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface MapPickerProps {
  onLocationSelected?: (location: SelectedLocation) => void;
}

export default function MapPicker({
  onLocationSelected,
}: MapPickerProps): React.ReactElement {
  const [, setSelectedLocation] = useState<SelectedLocation | null>(null);
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>({
    x: width / 2,
    y: 200,
  });
  const pan = useRef(new Animated.ValueXY({ x: width / 2, y: 200 })).current;

  // Lagos coordinates: 6.465422°N, 3.406448°E
  // Map range covers approximately 10km radius around central Lagos
  const LAGOS_CENTER_LAT = 6.465422;
  const LAGOS_CENTER_LNG = 3.406448;
  const MAP_HEIGHT = 400;
  const MAP_WIDTH = width - 32;

  const panResponder = useRef<PanResponderInstance | null>(null);

  // Calculate coordinates from pixel position
  const calculateCoordinates = useCallback(
    (x: number, y: number): Coordinates => {
      // Convert pixel position to lat/lng offset from center
      // Each pixel represents approximately 0.00015 degrees (~17 meters)
      const pixelToDegree = 0.00015;

      const xOffset = (x - MAP_WIDTH / 2) * pixelToDegree;
      const yOffset = -(y - MAP_HEIGHT / 2) * pixelToDegree; // Negative because screen Y increases downward

      const latitude = LAGOS_CENTER_LAT + yOffset;
      const longitude = LAGOS_CENTER_LNG + xOffset;

      return { latitude, longitude };
    },
    [MAP_WIDTH, MAP_HEIGHT]
  );

  // Initialize pan responder
  if (!panResponder.current) {
    panResponder.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        const currentPan = panResponder.current;
        if (currentPan && pan.x && pan.y) {
          // Use flattenOffset to get current position
          pan.flattenOffset();
        }
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }) as any,
      onPanResponderRelease: (_e: GestureEvent, gesture: PanGesture) => {
        pan.flattenOffset();
        const newX = Math.max(
          0,
          Math.min(MAP_WIDTH, markerPosition.x + gesture.dx)
        );
        const newY = Math.max(
          0,
          Math.min(MAP_HEIGHT, markerPosition.y + gesture.dy)
        );
        setMarkerPosition({ x: newX, y: newY });

        // Auto-update location when marker is released
        const coordinates = calculateCoordinates(newX, newY);
        const nearestAddress = getAddressByCoordinates(
          coordinates.latitude,
          coordinates.longitude,
          1.5
        );

        const location: SelectedLocation = {
          latitude: coordinates.latitude.toFixed(6),
          longitude: coordinates.longitude.toFixed(6),
          address: nearestAddress,
        };

        setSelectedLocation(location);
        onLocationSelected?.(location);
      },
    });
  }

  const handleMapPress = useCallback(
    (event: GestureEvent): void => {
      const { locationX, locationY } = event.nativeEvent;
      setMarkerPosition({ x: locationX, y: locationY });
      pan.setValue({ x: locationX, y: locationY });

      // Update location immediately when tapping
      const coordinates = calculateCoordinates(locationX, locationY);
      const nearestAddress = getAddressByCoordinates(
        coordinates.latitude,
        coordinates.longitude,
        1.5
      );

      const location: SelectedLocation = {
        latitude: coordinates.latitude.toFixed(6),
        longitude: coordinates.longitude.toFixed(6),
        address: nearestAddress,
      };

      setSelectedLocation(location);
      onLocationSelected?.(location);
    },
    [pan, calculateCoordinates, onLocationSelected]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleConfirm = useCallback((): void => {
    const coordinates = calculateCoordinates(
      markerPosition.x,
      markerPosition.y
    );

    // Find nearest address with proximity grouping
    const nearestAddress = getAddressByCoordinates(
      coordinates.latitude,
      coordinates.longitude,
      1.5 // 1500 meters proximity threshold
    );

    setSelectedLocation({
      latitude: coordinates.latitude.toFixed(6),
      longitude: coordinates.longitude.toFixed(6),
      address: nearestAddress,
    });
  }, [calculateCoordinates, markerPosition]);

  return (
    <View>
      <TouchableOpacity
        style={styles.mapContainer}
        onPress={handleMapPress}
        activeOpacity={1}
      >
        {/* Grid lines for map effect */}
        {[...Array(8)].map((_, i) => (
          <View key={`h-${i}`} style={[styles.gridLine, { top: i * 50 }]} />
        ))}
        {[...Array(8)].map((_, i) => (
          <View
            key={`v-${i}`}
            style={[styles.gridLineVertical, { left: i * 50 }]}
          />
        ))}

        {/* Mock streets */}
        <View style={[styles.street, { top: 100, left: 0, width: "100%" }]} />
        <View style={[styles.street, { top: 220, left: 0, width: "100%" }]} />
        <View style={[styles.street, { top: 340, left: 0, width: "100%" }]} />
        <View
          style={[styles.streetVertical, { left: 100, top: 0, height: "100%" }]}
        />
        <View
          style={[styles.streetVertical, { left: 220, top: 0, height: "100%" }]}
        />

        {/* Mock buildings - representing Lagos areas */}
        <View
          style={[
            styles.building,
            { top: 50, left: 30, backgroundColor: "#808080" },
          ]}
        />
        <View
          style={[
            styles.building,
            { top: 140, left: 160, backgroundColor: "#999999" },
          ]}
        />
        <View
          style={[
            styles.building,
            { top: 260, left: 80, backgroundColor: "#707070" },
          ]}
        />
        <View
          style={[
            styles.building,
            { top: 180, left: 280, backgroundColor: "#888888" },
          ]}
        />
        <View
          style={[
            styles.building,
            { top: 70, left: 250, backgroundColor: "#767676" },
          ]}
        />
        <View
          style={[
            styles.building,
            { top: 300, left: 200, backgroundColor: "#919191" },
          ]}
        />

        {/* Draggable marker */}
        <Animated.View
          style={[
            styles.markerContainer,
            {
              transform: [{ translateX: pan.x }, { translateY: pan.y }],
            },
          ]}
          {...(panResponder.current?.panHandlers || {})}
        >
          <Entypo name="location-pin" size={60} color="#1a1a1a" />
          <View style={styles.markerShadow} />
        </Animated.View>
      </TouchableOpacity>

      {/* <View className="mt-10">
        <AppText>Selected Location:</AppText>
        {selectedLocation ? (
          <>
            <AppText className="text-primary">
              📍 {selectedLocation.latitude}°N, {selectedLocation.longitude}°E
            </AppText>
            {selectedLocation.address ? (
              <>
                <AppText className="font-outfit-medium mt-2">
                  {selectedLocation.address.name}
                </AppText>
                <AppText className="text-secondary text-xs mt-1">
                  {selectedLocation.address.area}, Lagos
                </AppText>
                <AppText className="text-secondary text-xs mt-1">
                  {selectedLocation.address.fullAddress}
                </AppText>
              </>
            ) : (
              <AppText className="text-secondary text-xs mt-1">
                No address found nearby (try moving closer to known locations)
              </AppText>
            )}
          </>
        ) : (
          <AppText className="text-secondary">
            Tap or drag marker to select a location
          </AppText>
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4285F4",
    padding: 16,
    paddingTop: 50,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  subHeaderText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    marginTop: 4,
  },
  mapContainer: {
    height: 400,
    margin: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  gridLine: {
    position: "absolute",
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  gridLineVertical: {
    position: "absolute",
    height: "100%",
    width: 1,
    backgroundColor: "#e0e0e0",
  },
  street: {
    position: "absolute",
    height: 8,
    backgroundColor: "#b3b3b3",
  },
  streetVertical: {
    position: "absolute",
    width: 8,
    backgroundColor: "#b3b3b3",
  },
  building: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#666666",
  },
  markerContainer: {
    position: "absolute",
    alignItems: "center",
    marginLeft: -15,
    marginTop: -40,
  },
  markerShadow: {
    width: 10,
    height: 4,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    marginTop: 2,
  },
  locationInfo: {
    backgroundColor: "white",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  locationLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  locationSubtext: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    backgroundColor: "#4285F4",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

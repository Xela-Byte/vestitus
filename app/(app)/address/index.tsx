import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useCallback, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Reanimated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

interface Address {
  id: string;
  label: string;
  address: string;
}

const ITEM_HEIGHT = 100;

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: "1", label: "Home", address: "123 Main Street, Springfield, USA" },
    { id: "2", label: "Work", address: "456 Business Ave, Springfield, USA" },
    {
      id: "3",
      label: "Gym",
      address: "789 Fitness Blvd, Springfield, USA",
    },
  ]);

  const [selectedId, setSelectedId] = useState<string>(addresses[0]?.id || "1");
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleSelectAddress = (id: string) => {
    setSelectedId(id);
    // Move selected address to top with animation
    const selectedAddress = addresses.find((addr) => addr.id === id);
    const selectedIndex = addresses.findIndex((addr) => addr.id === id);
    if (selectedAddress && selectedIndex !== 0) {
      // Trigger animation by setting dragged state temporarily
      setDraggedIndex(selectedIndex);

      const filtered = addresses.filter((addr) => addr.id !== id);
      setAddresses([selectedAddress, ...filtered]);

      // Reset drag state after animation completes
      setTimeout(() => setDraggedIndex(null), 300);
    }
  };

  const updateAddressOrder = useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex !== toIndex) {
        const newAddresses = [...addresses];
        const [movedAddress] = newAddresses.splice(fromIndex, 1);
        newAddresses.splice(toIndex, 0, movedAddress);
        setAddresses(newAddresses);
        // If dragged to top, automatically select it
        if (toIndex === 0) {
          setSelectedId(movedAddress.id);
        }
      }
      setDraggedIndex(null);
    },
    [addresses]
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pb-3">
        <HeaderComponent title="Address" />
      </View>

      <View className="px-5 mb-4">
        <AppText variant="h4">Saved Addresses</AppText>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="gap-y-3 pb-4">
          {addresses.map((item, index) => (
            <DraggableAddressItem
              key={item.id}
              item={item}
              index={index}
              isSelected={selectedId === item.id}
              isDragging={draggedIndex === index}
              totalItems={addresses.length}
              onSelectAddress={handleSelectAddress}
              onReorder={(toIndex) => updateAddressOrder(index, toIndex)}
              onDragStart={() => setDraggedIndex(index)}
              onDragEnd={() => setDraggedIndex(null)}
            />
          ))}
        </View>

        <Link href={"/address/new-address"} asChild>
          <AppButton
            variant="outline"
            icon={<Feather name="plus" size={20} color="black" />}
            label="Add Address"
            className="mt-5 border border-stroke"
          />
        </Link>
      </ScrollView>

      <AppButton label="Apply" className="mx-5 mb-5" />
    </SafeAreaView>
  );
};

interface DraggableAddressItemProps {
  item: Address;
  index: number;
  isSelected: boolean;
  isDragging: boolean;
  totalItems: number;
  onSelectAddress: (id: string) => void;
  onReorder: (toIndex: number) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}

const DraggableAddressItem = ({
  item,
  index,
  isSelected,
  isDragging,
  totalItems,
  onSelectAddress,
  onReorder,
  onDragStart,
  onDragEnd,
}: DraggableAddressItemProps) => {
  const translateY = useSharedValue(0);
  const isDraggingGesture = useSharedValue(false);

  React.useEffect(() => {
    if (isDragging && index > 0) {
      // Animate to top when selected
      translateY.value = withSpring(-index * ITEM_HEIGHT);
    } else {
      translateY.value = withSpring(0);
    }
  }, [isDragging, index]); // eslint-disable-line react-hooks/exhaustive-deps

  const gesture = Gesture.Pan()
    .onStart(() => {
      isDraggingGesture.value = true;
      runOnJS(onDragStart)();
    })
    .onChange((event) => {
      translateY.value = event.translationY;
    })
    .onFinalize((event) => {
      const newIndex = Math.max(
        0,
        Math.min(
          totalItems - 1,
          index + Math.round(event.translationY / ITEM_HEIGHT)
        )
      );

      if (newIndex !== index) {
        runOnJS(onReorder)(newIndex);
      }

      translateY.value = withSpring(0);
      isDraggingGesture.value = false;
      runOnJS(onDragEnd)();
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: isDraggingGesture.value ? 0.7 : 1,
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Reanimated.View style={animatedStyle}>
        <View
          className="flex flex-row items-center gap-x-3 bg-[#efecec] rounded-lg p-4"
          style={{
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          {/* Drag Handle */}
          <View className="justify-center items-center w-5">
            <Feather name="menu" size={24} color="#808080" />
          </View>

          {/* Location Icon */}
          <Feather name="map-pin" size={24} color="#808080" />

          {/* Address Content */}
          <View className="flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <AppText className="text-sm font-outfit-semibold">
                {item.label}
              </AppText>
              {index === 0 && (
                <View className="bg-primary px-2 py-1 rounded">
                  <AppText className="text-xs font-outfit-semibold text-white">
                    Default
                  </AppText>
                </View>
              )}
            </View>
            <AppText variant="caption" className="text-secondary">
              {item.address}
            </AppText>
          </View>

          {/* Radio Button */}
          <TouchableOpacity
            onPress={() => onSelectAddress(item.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-primary bg-primary" : "border-secondary"
            }`}
          >
            {isSelected && <View className="w-2 h-2 bg-white rounded-full" />}
          </TouchableOpacity>
        </View>
      </Reanimated.View>
    </GestureDetector>
  );
};

export default SavedAddresses;

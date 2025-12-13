/**
 * Example usage of the address database and proximity features
 * This file demonstrates how to use the address system
 */

import type { Address, Coordinates } from "@/types/address";
import {
  calculateDistance,
  findAddressesNearby,
  findNearestAddress,
  getAddressByCoordinates,
  getAddressesByArea,
  getAvailableAreas,
} from "@/utils/data/addressDatabase";

/**
 * Example 1: Find nearest address to a point
 */
export function exampleFindNearestAddress(): void {
  const userLocation: Coordinates = {
    latitude: 6.4585,
    longitude: 3.4687,
  };

  const nearest = findNearestAddress(userLocation, 0.5); // 500m threshold

  if (nearest) {
    console.log(`Found address: ${nearest.name}`);
    console.log(`Area: ${nearest.area}`);
    console.log(`Full address: ${nearest.fullAddress}`);
  } else {
    console.log("No address found within 500m");
  }
}

/**
 * Example 2: Find all nearby addresses (useful for showing suggestions)
 */
export function exampleFindNearbyAddresses(): void {
  const userLocation: Coordinates = {
    latitude: 6.4585,
    longitude: 3.4687,
  };

  const nearbyAddresses = findAddressesNearby(userLocation, 1.0); // 1km radius

  console.log(`Found ${nearbyAddresses.length} addresses nearby:`);
  nearbyAddresses.forEach((addr: Address) => {
    const distance = calculateDistance(userLocation, addr);
    console.log(`- ${addr.name} (${distance.toFixed(2)}km away)`);
  });
}

/**
 * Example 3: Get all addresses in a specific area
 */
export function exampleGetAddressesByArea(): void {
  const lekki = getAddressesByArea("Lekki");

  console.log(`Found ${lekki.length} addresses in Lekki:`);
  lekki.forEach((addr: Address) => {
    console.log(`- ${addr.name}`);
  });
}

/**
 * Example 4: List all available areas
 */
export function exampleGetAvailableAreas(): void {
  const areas = getAvailableAreas();

  console.log(`Available areas in Lagos:`);
  areas.forEach((area: string) => {
    console.log(`- ${area}`);
  });
}

/**
 * Example 5: Calculate distance between two points
 */
export function exampleCalculateDistance(): void {
  const point1: Coordinates = {
    latitude: 6.4585,
    longitude: 3.4687,
  };

  const point2: Coordinates = {
    latitude: 6.4298,
    longitude: 3.4295,
  };

  const distance = calculateDistance(point1, point2);
  console.log(`Distance between points: ${distance.toFixed(2)}km`);
}

/**
 * Example 6: Direct address lookup by coordinates
 */
export function exampleGetAddressByCoordinates(): void {
  // This simulates marker position from map
  const markedCoordinates: Coordinates = {
    latitude: 6.4669,
    longitude: 3.4245,
  };

  const address = getAddressByCoordinates(
    markedCoordinates.latitude,
    markedCoordinates.longitude,
    0.5 // 500m proximity threshold
  );

  if (address) {
    console.log("✅ Address found!");
    console.log(`Name: ${address.name}`);
    console.log(`Area: ${address.area}`);
  } else {
    console.log("❌ No address found within proximity threshold");
  }
}

/**
 * Example 7: Integration with MapPicker component
 * Shows how the component uses the address system
 */
export function exampleMapPickerIntegration(): void {
  // When user places marker at pixel position on map
  const markerPixelX = 150;
  const markerPixelY = 200;
  const mapWidth = 343;
  const mapHeight = 400;

  // Convert pixel to coordinates
  const pixelToDegree = 0.00015;
  const LAGOS_CENTER_LAT = 6.465422;
  const LAGOS_CENTER_LNG = 3.406448;

  const xOffset = (markerPixelX - mapWidth / 2) * pixelToDegree;
  const yOffset = -(markerPixelY - mapHeight / 2) * pixelToDegree;

  const coordinates: Coordinates = {
    latitude: LAGOS_CENTER_LAT + yOffset,
    longitude: LAGOS_CENTER_LNG + xOffset,
  };

  // Find the nearest address
  const address = getAddressByCoordinates(
    coordinates.latitude,
    coordinates.longitude,
    0.5
  );

  // Return result (mimics SelectedLocation state)
  const result = {
    latitude: coordinates.latitude.toFixed(6),
    longitude: coordinates.longitude.toFixed(6),
    address: address,
  };

  console.log("Selected Location:", result);

  if (address) {
    console.log(`
📍 ${address.name}
📮 ${address.fullAddress}
🌍 ${address.area}, ${address.city}
    `);
  }
}

/**
 * Example 8: Proximity-based grouping of nearby coordinates
 * Groups multiple coordinates that are close to each other
 */
export function exampleProximityGrouping(): void {
  const proximityThreshold = 0.3; // 300m

  // Sample coordinates from map
  const coordinates: Coordinates[] = [
    { latitude: 6.4585, longitude: 3.4687 },
    { latitude: 6.459, longitude: 3.469 }, // Close to first
    { latitude: 6.5041, longitude: 3.3856 },
    { latitude: 6.5045, longitude: 3.386 }, // Close to third
  ];

  const groups: Address[][] = [];

  for (const coord of coordinates) {
    const nearby = findAddressesNearby(coord, proximityThreshold);

    if (nearby.length > 0) {
      // Check if this group already exists
      let found = false;

      for (const group of groups) {
        const groupDistance = calculateDistance(
          { latitude: group[0].latitude, longitude: group[0].longitude },
          coord
        );

        if (groupDistance <= proximityThreshold) {
          group.push(...nearby);
          found = true;
          break;
        }
      }

      if (!found) {
        groups.push(nearby);
      }
    }
  }

  console.log(
    `Grouped ${coordinates.length} coordinates into ${groups.length} proximity groups`
  );

  groups.forEach((group, index) => {
    console.log(`\nGroup ${index + 1} (${group.length} addresses):`);
    group.forEach((addr) => {
      console.log(`  - ${addr.name}`);
    });
  });
}

// Export all examples as a single utility object
export const AddressExamples = {
  findNearestAddress: exampleFindNearestAddress,
  findNearbyAddresses: exampleFindNearbyAddresses,
  getAddressesByArea: exampleGetAddressesByArea,
  getAvailableAreas: exampleGetAvailableAreas,
  calculateDistance: exampleCalculateDistance,
  getAddressByCoordinates: exampleGetAddressByCoordinates,
  mapPickerIntegration: exampleMapPickerIntegration,
  proximityGrouping: exampleProximityGrouping,
};

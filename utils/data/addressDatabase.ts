import type { Address, Coordinates } from "@/types/address";

/**
 * Comprehensive Lagos address database with latitude/longitude coordinates
 * Organized by area for better proximity grouping
 */
export const LAGOS_ADDRESSES: Address[] = [
  // Victoria Island
  {
    id: "vi_001",
    name: "Lekki Conservation Centre",
    area: "Victoria Island",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4669,
    longitude: 3.4245,
    fullAddress: "Lekki Conservation Centre, Victoria Island, Lagos, Nigeria",
  },
  {
    id: "vi_002",
    name: "Victoria Island Mall",
    area: "Victoria Island",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4298,
    longitude: 3.4295,
    fullAddress: "Victoria Island Mall, Victoria Island, Lagos, Nigeria",
  },
  {
    id: "vi_003",
    name: "Oniru Beach",
    area: "Victoria Island",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4398,
    longitude: 3.4198,
    fullAddress: "Oniru Beach, Victoria Island, Lagos, Nigeria",
  },
  {
    id: "vi_004",
    name: "Eko Hotel & Suites",
    area: "Victoria Island",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4262,
    longitude: 3.4298,
    fullAddress: "Eko Hotel & Suites, Victoria Island, Lagos, Nigeria",
  },

  // Lekki
  {
    id: "lekki_001",
    name: "Lekki Phase 1",
    area: "Lekki",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4585,
    longitude: 3.4687,
    fullAddress: "Lekki Phase 1, Lagos, Nigeria",
  },
  {
    id: "lekki_002",
    name: "Lekki Phase 2",
    area: "Lekki",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4698,
    longitude: 3.4812,
    fullAddress: "Lekki Phase 2, Lagos, Nigeria",
  },
  {
    id: "lekki_003",
    name: "Lekki Gardens Estate",
    area: "Lekki",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4562,
    longitude: 3.4725,
    fullAddress: "Lekki Gardens Estate, Lagos, Nigeria",
  },
  {
    id: "lekki_004",
    name: "Chevron Drive, Lekki",
    area: "Lekki",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4721,
    longitude: 3.4891,
    fullAddress: "Chevron Drive, Lekki, Lagos, Nigeria",
  },
  {
    id: "lekki_005",
    name: "Ajah Express Market",
    area: "Lekki",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4512,
    longitude: 3.4921,
    fullAddress: "Ajah Express Market, Lekki, Lagos, Nigeria",
  },

  // Ikoyi
  {
    id: "ikoyi_001",
    name: "Ikoyi Club",
    area: "Ikoyi",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4459,
    longitude: 3.4128,
    fullAddress: "Ikoyi Club, Ikoyi, Lagos, Nigeria",
  },
  {
    id: "ikoyi_002",
    name: "Banana Island",
    area: "Ikoyi",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4298,
    longitude: 3.4198,
    fullAddress: "Banana Island, Ikoyi, Lagos, Nigeria",
  },
  {
    id: "ikoyi_003",
    name: "Ikoyi Shopping Complex",
    area: "Ikoyi",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4365,
    longitude: 3.4165,
    fullAddress: "Ikoyi Shopping Complex, Ikoyi, Lagos, Nigeria",
  },

  // Yaba
  {
    id: "yaba_001",
    name: "University of Lagos",
    area: "Yaba",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5041,
    longitude: 3.3856,
    fullAddress: "University of Lagos, Yaba, Lagos, Nigeria",
  },
  {
    id: "yaba_002",
    name: "Yaba Market",
    area: "Yaba",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5089,
    longitude: 3.3759,
    fullAddress: "Yaba Market, Yaba, Lagos, Nigeria",
  },
  {
    id: "yaba_003",
    name: "Nigerian Institute of Medical Research",
    area: "Yaba",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5125,
    longitude: 3.3825,
    fullAddress: "Nigerian Institute of Medical Research, Yaba, Lagos, Nigeria",
  },

  // Ikeja
  {
    id: "ikeja_001",
    name: "Ikeja City Mall",
    area: "Ikeja",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5898,
    longitude: 3.3462,
    fullAddress: "Ikeja City Mall, Ikeja, Lagos, Nigeria",
  },
  {
    id: "ikeja_002",
    name: "Allen Avenue, Ikeja",
    area: "Ikeja",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5945,
    longitude: 3.3298,
    fullAddress: "Allen Avenue, Ikeja, Lagos, Nigeria",
  },
  {
    id: "ikeja_003",
    name: "Sheraton Hotels & Towers",
    area: "Ikeja",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5872,
    longitude: 3.3425,
    fullAddress: "Sheraton Hotels & Towers, Ikeja, Lagos, Nigeria",
  },
  {
    id: "ikeja_004",
    name: "Computer Village, Ikeja",
    area: "Ikeja",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5978,
    longitude: 3.3325,
    fullAddress: "Computer Village, Ikeja, Lagos, Nigeria",
  },

  // Surulere
  {
    id: "surulere_001",
    name: "National Stadium, Surulere",
    area: "Surulere",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4875,
    longitude: 3.3625,
    fullAddress: "National Stadium, Surulere, Lagos, Nigeria",
  },
  {
    id: "surulere_002",
    name: "Surulere Market",
    area: "Surulere",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4921,
    longitude: 3.3521,
    fullAddress: "Surulere Market, Surulere, Lagos, Nigeria",
  },

  // Mainland / Mushin
  {
    id: "mushin_001",
    name: "Mushin Market",
    area: "Mushin",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5325,
    longitude: 3.3475,
    fullAddress: "Mushin Market, Mushin, Lagos, Nigeria",
  },
  {
    id: "mushin_002",
    name: "Shomolu Local Government",
    area: "Mushin",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5412,
    longitude: 3.3589,
    fullAddress: "Shomolu Local Government, Mushin, Lagos, Nigeria",
  },

  // Bariga
  {
    id: "bariga_001",
    name: "Bariga Market",
    area: "Bariga",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5189,
    longitude: 3.3725,
    fullAddress: "Bariga Market, Bariga, Lagos, Nigeria",
  },
  {
    id: "bariga_002",
    name: "Fadeyi Bus Stop",
    area: "Bariga",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5256,
    longitude: 3.3798,
    fullAddress: "Fadeyi Bus Stop, Bariga, Lagos, Nigeria",
  },

  // Ajah/Lekki environs
  {
    id: "ajah_001",
    name: "Ajah Bus Stop",
    area: "Ajah",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4412,
    longitude: 3.5125,
    fullAddress: "Ajah Bus Stop, Lagos, Nigeria",
  },
  {
    id: "ajah_002",
    name: "Epe Expressway, Ajah",
    area: "Ajah",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4325,
    longitude: 3.5089,
    fullAddress: "Epe Expressway, Ajah, Lagos, Nigeria",
  },

  // Central Lagos / Obalende
  {
    id: "central_001",
    name: "Lagos Island Central",
    area: "Central Lagos",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4695,
    longitude: 3.3621,
    fullAddress: "Lagos Island Central, Lagos, Nigeria",
  },
  {
    id: "central_002",
    name: "Obalende Market",
    area: "Central Lagos",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4562,
    longitude: 3.3458,
    fullAddress: "Obalende Market, Lagos, Nigeria",
  },

  // Mainland areas - expanding coverage
  {
    id: "mainland_001",
    name: "Mainland Shopping Centre",
    area: "Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.475,
    longitude: 3.385,
    fullAddress: "Mainland Shopping Centre, Lagos, Nigeria",
  },
  {
    id: "mainland_002",
    name: "Idemili Bus Stop",
    area: "Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.485,
    longitude: 3.395,
    fullAddress: "Idemili Bus Stop, Lagos, Nigeria",
  },
  {
    id: "mainland_003",
    name: "Central Area Market",
    area: "Central Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.468,
    longitude: 3.388,
    fullAddress: "Central Area Market, Lagos, Nigeria",
  },
  {
    id: "mainland_004",
    name: "Lagos Mainland Hospital",
    area: "Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.47,
    longitude: 3.395,
    fullAddress: "Lagos Mainland Hospital, Lagos, Nigeria",
  },
  {
    id: "mainland_005",
    name: "Holiday Inn Lagos",
    area: "Central Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.468,
    longitude: 3.392,
    fullAddress: "Holiday Inn Lagos, Lagos, Nigeria",
  },
  {
    id: "mainland_003",
    name: "CMS/Bishop Street",
    area: "Central Business District",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.4562,
    longitude: 3.365,
    fullAddress: "CMS/Bishop Street, Lagos Island, Lagos, Nigeria",
  },
  {
    id: "mainland_004",
    name: "Ladi Kwali Hall",
    area: "Mainland",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.465,
    longitude: 3.375,
    fullAddress: "Ladi Kwali Hall, Lagos, Nigeria",
  },

  // Northern Lagos areas
  {
    id: "north_001",
    name: "Ikorodu Road Junction",
    area: "Ikorodu",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.55,
    longitude: 3.32,
    fullAddress: "Ikorodu Road Junction, Lagos, Nigeria",
  },
  {
    id: "north_002",
    name: "Ketu Market",
    area: "Ketu",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.62,
    longitude: 3.38,
    fullAddress: "Ketu Market, Ketu, Lagos, Nigeria",
  },
  {
    id: "north_003",
    name: "Ojota Bus Stop",
    area: "Ojota",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.59,
    longitude: 3.34,
    fullAddress: "Ojota Bus Stop, Lagos, Nigeria",
  },
  {
    id: "north_004",
    name: "GRA Ikeja",
    area: "Ikeja",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.6,
    longitude: 3.36,
    fullAddress: "GRA Ikeja, Ikeja, Lagos, Nigeria",
  },

  // Western Lagos areas
  {
    id: "west_001",
    name: "Badagry Plaza",
    area: "Badagry",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.49,
    longitude: 3.0,
    fullAddress: "Badagry Plaza, Badagry, Lagos, Nigeria",
  },
  {
    id: "west_002",
    name: "Abeokuta Road Market",
    area: "Oshodi",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.565,
    longitude: 3.35,
    fullAddress: "Abeokuta Road Market, Oshodi, Lagos, Nigeria",
  },
  {
    id: "west_003",
    name: "Fadeyi/Bariga Market",
    area: "Bariga",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5256,
    longitude: 3.3798,
    fullAddress: "Fadeyi/Bariga Market, Bariga, Lagos, Nigeria",
  },

  // More central coverage
  {
    id: "center_001",
    name: "Broad Street Area",
    area: "Central Lagos",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.452,
    longitude: 3.352,
    fullAddress: "Broad Street Area, Lagos Island, Lagos, Nigeria",
  },
  {
    id: "center_002",
    name: "Oshodi-Ike Interchange",
    area: "Oshodi",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5556,
    longitude: 3.3455,
    fullAddress: "Oshodi-Ike Interchange, Oshodi, Lagos, Nigeria",
  },
  {
    id: "center_003",
    name: "Shomolu Market Complex",
    area: "Shomolu",
    city: "Lagos",
    state: "Lagos",
    country: "Nigeria",
    latitude: 6.5412,
    longitude: 3.3589,
    fullAddress: "Shomolu Market Complex, Shomolu, Lagos, Nigeria",
  },
];

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export const calculateDistance = (
  coord1: Coordinates,
  coord2: Coordinates
): number => {
  const R = 6371; // Earth's radius in km
  const dLat = ((coord2.latitude - coord1.latitude) * Math.PI) / 180;
  const dLng = ((coord2.longitude - coord1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1.latitude * Math.PI) / 180) *
      Math.cos((coord2.latitude * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Find the nearest address(es) to given coordinates
 * Uses proximity threshold (default 0.5 km = 500 meters)
 * Returns the closest address or null if beyond threshold
 */
export const findNearestAddress = (
  coordinates: Coordinates,
  proximityThresholdKm: number = 0.5
): Address | null => {
  let nearestAddress: Address | null = null;
  let minDistance = proximityThresholdKm;

  for (const address of LAGOS_ADDRESSES) {
    const distance = calculateDistance(coordinates, address);
    if (distance < minDistance) {
      minDistance = distance;
      nearestAddress = address;
    }
  }

  return nearestAddress;
};

/**
 * Find all addresses within a proximity radius
 * Useful for showing nearby locations
 */
export const findAddressesNearby = (
  coordinates: Coordinates,
  proximityRadiusKm: number = 1.0
): Address[] => {
  return LAGOS_ADDRESSES.filter((address) => {
    const distance = calculateDistance(coordinates, address);
    return distance <= proximityRadiusKm;
  }).sort((a, b) => {
    const distA = calculateDistance(coordinates, a);
    const distB = calculateDistance(coordinates, b);
    return distA - distB;
  });
};

/**
 * Get address by coordinates with optional fuzzy matching
 * Returns address object if found within proximity threshold
 */
export const getAddressByCoordinates = (
  latitude: number,
  longitude: number,
  proximityThresholdKm: number = 0.5
): Address | null => {
  return findNearestAddress({ latitude, longitude }, proximityThresholdKm);
};

/**
 * Get all unique areas in Lagos
 */
export const getAvailableAreas = (): string[] => {
  const areas = new Set(LAGOS_ADDRESSES.map((addr) => addr.area));
  return Array.from(areas).sort();
};

/**
 * Get all addresses in a specific area
 */
export const getAddressesByArea = (area: string): Address[] => {
  return LAGOS_ADDRESSES.filter((addr) => addr.area === area);
};

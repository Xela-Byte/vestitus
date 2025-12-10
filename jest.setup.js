// Suppress console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  multiSet: jest.fn(() => Promise.resolve()),
  multiGet: jest.fn(() => Promise.resolve([])),
  clear: jest.fn(() => Promise.resolve()),
  getAllKeys: jest.fn(() => Promise.resolve([])),
  __esModule: true,
  default: {
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)),
    removeItem: jest.fn(() => Promise.resolve()),
    multiSet: jest.fn(() => Promise.resolve()),
    multiGet: jest.fn(() => Promise.resolve([])),
    clear: jest.fn(() => Promise.resolve()),
    getAllKeys: jest.fn(() => Promise.resolve([])),
  },
}));

// Mock expo-font
jest.mock("expo-font", () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
}));

// Mock expo-splash-screen
jest.mock("expo-splash-screen", () => ({
  hideAsync: jest.fn(() => Promise.resolve()),
  preventAutoHideAsync: jest.fn(() => Promise.resolve()),
}));

// Mock expo-router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    navigate: jest.fn(),
  })),
  useSegments: jest.fn(() => []),
  usePathname: jest.fn(() => "/"),
  useLocalSearchParams: jest.fn(() => ({})),
  Stack: {
    Screen: "MockStackScreen",
    Navigator: "MockStackNavigator",
  },
  Tabs: {
    Screen: "MockTabsScreen",
    Navigator: "MockTabsNavigator",
  },
}));

// Mock NativeWind
jest.mock("nativewind", () => ({
  useColorScheme: jest.fn(() => "light"),
}));

// Mock react-native-gesture-handler
jest.mock("react-native-gesture-handler", () => ({
  GestureHandlerRootView: ({ children }) => children,
}));

// Mock react-native-reanimated
jest.mock("react-native-reanimated", () => ({
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: "MockNavigator",
    Screen: "MockScreen",
  })),
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: "MockNavigator",
    Screen: "MockScreen",
  })),
  withTiming: jest.fn((value) => value),
  withSpring: jest.fn((value) => value),
  useSharedValue: jest.fn(() => 0),
  useAnimatedStyle: jest.fn(() => ({})),
  Easing: {
    inOut: jest.fn(),
  },
}));

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

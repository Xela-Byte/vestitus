// Setup expo-router testing library matchers
require("expo-router/build/testing-library/expect");

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock CSS imports
jest.mock("@/styles/global.css", () => ({}));

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
  Link: "MockLink",
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

// Mock @react-navigation/bottom-tabs
jest.mock("@react-navigation/bottom-tabs", () => ({
  useBottomTabBarHeight: jest.fn(() => 60),
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: "MockNavigator",
    Screen: "MockScreen",
  })),
}));

// Mock Animated API for SplashScreenComponent
jest.mock("react-native/Libraries/Animated/AnimatedImplementation", () => {
  const createAnimatedComponent = (Component) => Component;
  const Value = jest.fn(function (value) {
    this.setValue = jest.fn();
    this.addListener = jest.fn(() => "listener_id");
    this.removeListener = jest.fn();
    this.removeAllListeners = jest.fn();
    this.interpolate = jest.fn(() => 0);
    this.animate = jest.fn();
    this.stopAnimation = jest.fn();
    this.resetAnimation = jest.fn();
  });

  return {
    Animated: {
      timing: jest.fn((value, config) => ({
        start: jest.fn((callback) => {
          if (callback) callback();
        }),
        stop: jest.fn(),
        reset: jest.fn(),
      })),
      sequence: jest.fn((animations) => ({
        start: jest.fn((callback) => {
          if (callback) callback();
        }),
        stop: jest.fn(),
        reset: jest.fn(),
      })),
      parallel: jest.fn((animations) => ({
        start: jest.fn((callback) => {
          if (callback) callback();
        }),
        stop: jest.fn(),
        reset: jest.fn(),
      })),
      Value,
      createAnimatedComponent,
    },
    timing: jest.fn((value, config) => ({
      start: jest.fn((callback) => {
        if (callback) callback();
      }),
      stop: jest.fn(),
      reset: jest.fn(),
    })),
    sequence: jest.fn((animations) => ({
      start: jest.fn((callback) => {
        if (callback) callback();
      }),
      stop: jest.fn(),
      reset: jest.fn(),
    })),
    parallel: jest.fn((animations) => ({
      start: jest.fn((callback) => {
        if (callback) callback();
      }),
      stop: jest.fn(),
      reset: jest.fn(),
    })),
    Value,
    createAnimatedComponent,
  };
});

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

// Import expo-router testing library matchers and extend expect
import "@testing-library/jest-native/extend-expect";
import "expo-router/testing-library/matchers";

// Extend the Jest matchers with expo-router types
declare global {
  namespace jest {
    interface Matchers<R> {
      toHavePathname(pathname: string): R;
      toHavePathnameWithParams(pathname: string): R;
      toHaveSegments(segments: string[]): R;
      useLocalSearchParams(params: Record<string, string>): R;
      useGlobalSearchParams(params: Record<string, string>): R;
      toHaveRouterState(state: any): R;
    }
  }
}

import { useAuthStore } from "@/store";
import { act, renderHook } from "@testing-library/react-native";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
}));

describe("useAuthStore", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.logout();
    });
  });

  it("initializes with null user", () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeNull();
  });

  it("sets user correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser = {
      fullName: "John Doe",
      email: "john@example.com",
      password: "password123",
    };

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
  });

  it("logs in user correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser = {
      fullName: "Jane Doe",
      email: "jane@example.com",
      password: "securePassword123",
    };

    act(() => {
      result.current.login(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
  });

  it("logs out user correctly", () => {
    const { result } = renderHook(() => useAuthStore());
    const mockUser = {
      fullName: "Test User",
      email: "test@example.com",
      password: "testPassword123",
    };

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
  });

  it("updates user through multiple operations", () => {
    const { result } = renderHook(() => useAuthStore());
    const user1 = {
      fullName: "User One",
      email: "user1@example.com",
      password: "pass123",
    };

    const user2 = {
      fullName: "User Two",
      email: "user2@example.com",
      password: "pass456",
    };

    act(() => {
      result.current.login(user1);
    });

    expect(result.current.user).toEqual(user1);

    act(() => {
      result.current.setUser(user2);
    });

    expect(result.current.user).toEqual(user2);
  });
});

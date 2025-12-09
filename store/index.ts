import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  fullName: string;
  email: string;
  password: string;
}

interface AppState {
  user: User | null;
  setUser: (userData: User) => void;
  login: (data: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (userData: User) =>
        set({
          user: userData,
        }),
      login: (data: User) =>
        set({
          user: data,
        }),
      logout: () => {
        set((state) => ({
          user: null,
        }));
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {}

export const useAppStore = create<AppState>()(
  persist((set, get) => ({}), {
    name: "app-storage",
    storage: createJSONStorage(() => AsyncStorage),
  })
);

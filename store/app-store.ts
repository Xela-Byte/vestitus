import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AppState {
  transcribedText: string;
  setTranscribedText: (text: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      transcribedText: "",
      setTranscribedText: (text: string) =>
        set({
          transcribedText: text,
        }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

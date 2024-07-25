import { create } from "zustand";

export const useUser = create((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

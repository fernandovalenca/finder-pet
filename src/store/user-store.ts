import User from "@/core/domain/entities/user";
import { create } from "zustand";

type UserState = {
  user: User | null;
  signIn: (user: User) => Promise<void>;
  signOut: () => Promise<void>;
};

const userStore = create<UserState>((set) => ({
  user: null,
  signIn: async (user) => {
    set((state) => ({ ...state, user: user }));
  },
  signOut: async () => {
    set((state) => ({ ...state, user: null }));
  },
}));

export default userStore;

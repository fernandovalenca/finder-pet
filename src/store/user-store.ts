import User from "@/core/domain/entities/user";
import { create } from "zustand";

type State = {
  user: Omit<User, "username" | "password"> | null;
  error: string | null;
};

type Actions = {
  signIn: (user: Omit<User, "username" | "password">) => Promise<void>;
  signOut: () => Promise<void>;
  handleError: (err: string) => void;
};

const userStore = create<State & Actions>((set) => ({
  user: null,
  error: null,
  signIn: async (user) => {
    set((state) => ({ ...state, user: user }));
  },
  signOut: async () => {
    set((state) => ({ ...state, user: null }));
  },
  handleError: (err) => {
    set((state) => ({ ...state, error: err }));
  },
}));

export default userStore;

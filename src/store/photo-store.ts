import { Photo } from "@/core/domain/entities/photo";
import { create } from "zustand";

type State = {
  photos: Photo[];
  currentPage: number;
  searchText: string;
  error: string | null;
  total: number;
};

type Actions = {
  findPhotos: (input: Input) => void;
  showMorePhotos: (input: Input) => void;
  handleError: (err: string) => void;
};

const photoStore = create<State & Actions>((set) => ({
  photos: [],
  searchText: "",
  currentPage: 1,
  total: 0,
  error: null,
  findPhotos: (input) => {
    set((state) => ({
      ...state,
      photos: input.photos,
      searchText: input.searchText,
      total: input.total,
      currentPage: input.currentPage,
    }));
  },
  showMorePhotos: (input) => {
    set((state) => ({
      ...state,
      photos: [...state.photos, ...input.photos],
      searchText: input.searchText,
      total: input.total,
      currentPage: input.currentPage,
    }));
  },
  handleError: (err) => {
    set((state) => ({ ...state, error: err }));
  },
}));

type Input = {
  total: number;
  currentPage: number;
  searchText: string;
  photos: Photo[];
};

export default photoStore;

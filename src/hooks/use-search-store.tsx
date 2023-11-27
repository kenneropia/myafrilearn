import { create } from "zustand";
type SearchStore = {
  currentSearch: string | null;
  setSearch: (searchId: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  currentSearch: null,
  setSearch: (searchId) => set({ currentSearch: searchId }),
}));

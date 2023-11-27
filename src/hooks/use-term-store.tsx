import { TermEnum } from "@/lib/types";
import { create } from "zustand";

type TermStore = {
  currentTerm: string | null;
  setTerm: (termId: TermEnum) => void;
};

export const useTermStore = create<TermStore>((set) => ({
  currentTerm: null,
  setTerm: (termId) => set({ currentTerm: termId }),
}));

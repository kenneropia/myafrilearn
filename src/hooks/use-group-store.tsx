import { create } from "zustand";

type GroupStore = {
  currentGroup: string | null;
  setGroup: (groupId: string) => void;
};

export const useGroupStore = create<GroupStore>((set) => ({
  currentGroup: null,
  setGroup: (groupId: string) => set({ currentGroup: groupId }),
}));

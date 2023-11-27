import { useMemo } from "react";
import Fuse from "fuse.js";
import { ClassNote } from "@/lib/types";
import { useState } from "react";
import { useSearchStore } from "./use-search-store";

interface IUseSearchProps {
  dataSet: ClassNote[];
  keys: string[];
}

const SCORE_THRESHOLD = 0.4;

export const useClassNoteSearch = ({ dataSet, keys }: IUseSearchProps) => {
  const searchStore = useSearchStore();

  const fuse = useMemo(() => {
    const options = {
      includeScore: true,
      keys,
    };

    return new Fuse(dataSet, options);
  }, [dataSet, keys]);

  const results = useMemo(() => {
    if (!searchStore.currentSearch) return dataSet;

    const searchResults = fuse.search(searchStore.currentSearch);

    return searchResults
      .filter((fuseResult) => fuseResult?.score < SCORE_THRESHOLD)
      .map((fuseResult) => fuseResult.item);
  }, [fuse, searchStore.currentSearch, dataSet]);

  return {
    results,
  };
};

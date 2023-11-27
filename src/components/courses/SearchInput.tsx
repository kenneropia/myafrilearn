"use client";
import { useSearchStore } from "@/hooks/use-search-store";
import { Search } from "lucide-react";

export const SearchInput = () => {
  const searchStore = useSearchStore();
  return (
    <form className="md:w-7/12 w-10/12 md:min-w-[200px]">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search />
        </div>
        <input
          onChange={(e) => {
            searchStore.setSearch(e.target.value);
          }}
          value={searchStore.currentSearch || ""}
          type="search"
          className="inline-flex rounded-xl  w-full py-[0.900rem] px-3 ps-10 text-sm text-gray-900 border-solid border-[#191C2D] bg-white border-2"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

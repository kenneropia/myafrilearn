"use client";
import { cn } from "@/lib/cn";
import { ClassDropdownMenu, TermDropdownMenu } from "./DropDown";
import { andika } from "@/lib/fonts";
import { Plus, Search } from "lucide-react";
import axios from "axios";
import { Group } from "@/lib/types";
import { useSearchStore } from "@/hooks/use-search-store";

export const HeaderForm = async () => {
  interface ClassGroupRes {
    data: Group[];
  }
  const response = await axios.get<ClassGroupRes>(
    "https://api-test-f4ae.up.railway.app/v1/classes/groups"
  );

  const classGroups = response.data.data;

  return (
    <div
      className={cn(
        "flex sm:flex-nowrap flex-wrap sm:w-8/12 w-full space-x-3",
        andika.className
      )}
    >
      <ClassDropdownMenu classGroups={classGroups} />
      <TermDropdownMenu />
      <SearchInput />
      <button className="inline-flex rounded-xl md:min-w-[150px] justify-center items-center border-[#191C2D] border-2 bg-[#7CF5B2]">
        Create note <Plus className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

const SearchInput = () => {
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

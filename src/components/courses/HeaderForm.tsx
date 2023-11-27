"use server";
import { cn } from "@/lib/cn";
import { ClassDropdownMenu, TermDropdownMenu } from "./DropDown";
import { andika } from "@/lib/fonts";
import { Plus } from "lucide-react";
import axios from "axios";
import { Group } from "@/lib/types";
import { SearchInput } from "./SearchInput";

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

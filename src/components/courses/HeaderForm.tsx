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
    <div className={cn("flex   space-x-3", andika.className)}>
      <ClassDropdownMenu classGroups={classGroups} />
      <TermDropdownMenu />
      <SearchInput />
      <button className="inline-flex md:px-0 px-3 rounded-xl w-44 justify-center items-center border-[#191C2D] border-2 bg-[#7CF5B2]">
        <span className="text-[12px] md:text-[1rem]">Create note</span>{" "}
        <Plus className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

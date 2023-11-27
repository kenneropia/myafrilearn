"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Group, TermEnum } from "@/lib/types";
import { useGroupStore } from "@/hooks/use-group-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useTermStore } from "@/hooks/use-term-store";

export function ClassDropdownMenu({ classGroups }: { classGroups: Group[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const classGroupId = searchParams.get("classGroupId");

  return (
    <Select
      defaultValue={classGroupId!}
      onValueChange={(val) => {
        router.push(`/?classGroupId=${val}`);
      }}
    >
      {classGroups ? (
        <>
          <SelectTrigger className="text-base font-bold inline-flex justify-between w-32 py-6 px-3 rounded-xl border-[#191C2D] bg-white border-2">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent className="text-base font-bold bg-white">
            {classGroups.map((item) => {
              return (
                <SelectItem
                  defaultChecked={item._id == classGroupId}
                  key={item._id}
                  value={item._id}
                >
                  {item.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </>
      ) : (
        <SelectTrigger className="text-base font-bold inline-flex justify-between w-32 py-6 px-3 rounded-xl border-[#191C2D] bg-white border-2">
          <SelectValue placeholder="Loading Class" />
        </SelectTrigger>
      )}
    </Select>
  );
}

export function TermDropdownMenu() {
  const termStore = useTermStore();
  return (
    <Select
      defaultValue="First Term"
      onValueChange={(val: TermEnum) => {
        termStore.setTerm(val);
      }}
    >
      <SelectTrigger className="text-base font-bold inline-flex justify-between w-32 py-6 px-3 rounded-xl border-[#191C2D] bg-white border-2">
        <SelectValue placeholder="Term" />
      </SelectTrigger>
      <SelectContent className="text-base font-bold bg-white">
        <SelectItem value="First Term">1st Term</SelectItem>
        <SelectItem value="Second Term">2nd Term</SelectItem>
        <SelectItem value="Third Term">3rd Term</SelectItem>
      </SelectContent>
    </Select>
  );
}

"use client";
import { cn } from "@/lib/cn";
import {
  ClassIcon,
  DashboardIcon,
  NotesIcon,
  SubjectIcon,
  VideosIcon,
} from "../icons/SideBarIcons";
import { nunito } from "@/lib/fonts";
import { SVGProps, useState } from "react";
import { log } from "console";

type SideBarStateEnum =
  | "dashboard"
  | "notes"
  | "videos"
  | "class"
  | "subject"
  | "term";

const SideBarItems: Array<{
  Icon: React.FC<{
    extraStyle?: SVGProps<SVGSVGElement> | undefined;
    stroke: string;
  }>;
  text: string;
  key: SideBarStateEnum;
}> = [
  {
    Icon: DashboardIcon,
    key: "dashboard",
    text: "Dashboard",
  },
  { Icon: NotesIcon, key: "notes", text: "Notes" },
  { Icon: VideosIcon, key: "videos", text: "Videos" },
  { Icon: ClassIcon, key: "class", text: "Class" },
  { Icon: SubjectIcon, key: "subject", text: "Subject" },
  { Icon: DashboardIcon, key: "term", text: "Terms" },
];
const index: SideBarStateEnum = "notes";

export const SideBar = () => {
  const [hovered, setHovered] = useState<SideBarStateEnum | null>(null);

  const handleMouse = (hoveredIndex: SideBarStateEnum | null) => {
    setHovered(hoveredIndex);
  };

  return (
    <aside className="flex h-full fixed left-0 flex-col w-[75px] xl:w-[256px] bg-[#292A2F]">
      <div className="p-5 space-y-5">
        {SideBarItems.map((item) => {
          const isFocus = index === item.key;
          const color = isFocus ? "black" : "white";
          return (
            <span
              onMouseOver={() => handleMouse(item.key)}
              onMouseOut={() => handleMouse(null)}
              className={cn(
                hovered == item.key && "bg-[#7CF5B2]",
                "flex px-2 rounded-lg w-full min-h-[46px] space-x-2 h-auto items-center",
                isFocus && "bg-[#7CF5B2]"
              )}
              key={item.key}
            >
              <item.Icon
                stroke={hovered == item.key || isFocus ? "black" : "white"}
              ></item.Icon>
              <span
                className={cn(
                  nunito.className,
                  color == "white" ? `text-white` : "text-black",
                  "hidden h-full xl:inline-flex items-center font-semibold text-lg leading-9",
                  hovered == item.key && `text-black`
                )}
              >
                {item.text}
              </span>
            </span>
          );
        })}
      </div>
    </aside>
  );
};

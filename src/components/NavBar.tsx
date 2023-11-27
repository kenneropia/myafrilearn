"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { andika, nunito } from "@/lib/fonts";
import { NavIcon } from "./icons/NavIcon";
import schoolBoyImage from "../../public/sch_boy.jpg";
import { ChevronRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "flex z-20 justify-between w-full flex-row px-5 py-[27px] items-center border-b-2 border-solid border-gray-700",
        nunito.className,
        isScrolled && "sticky top-0 bg-white shadow-md" // Apply the sticky styles when scrolled
      )}
    >
      <p className={cn(nunito.className, "flex items-center font-extrabold")}>
        <NavIcon className="mr-2" />{" "}
        <span className="text-2xl">Classnotes</span>
      </p>
      <nav
        className={cn(
          andika.className,
          "flex space-x-3 items-center font-normal"
        )}
      >
        <Image
          className="w-10 h-10 rounded-2xl border-2 border-gray-800 overflow-hidden"
          src={schoolBoyImage}
          alt="Picture of an African school boy in class, he is smiling"
        />
        <span className="text-lg leading-7 text-[#191C2D]">Joshua</span>
        <ChevronRight />
      </nav>
    </header>
  );
};

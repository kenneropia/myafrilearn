import { cn } from "@/lib/cn";
import { HeaderForm } from "./HeaderForm";
import { nunito } from "@/lib/fonts";

export const Header = () => {
  return (
    <header className="flex md:flex-row flex-col px-5 py-4 items-center flex-wrap justify-between w-full border-b-2 border-solid border-gray-700">
      <span
        className={cn(
          nunito.className,
          "inline-flex w-1/12 text-black text-[33px] font-extrabold leading-[3rem]"
        )}
      >
        Notes
      </span>

      <HeaderForm />
    </header>
  );
};

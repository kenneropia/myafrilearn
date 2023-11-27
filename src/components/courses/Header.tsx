import { cn } from "@/lib/cn";
import { HeaderForm } from "./HeaderForm";
import { nunito } from "@/lib/fonts";

export const Header = () => {
  return (
    <header className="flex flex-row px-5 py-4 items-center sm:space-x-0 space-x-16   justify-between  border-b-2 border-solid border-gray-700">
      <span
        className={cn(
          nunito.className,
          "inline-flex text-black text-[33px] font-extrabold leading-[3rem]"
        )}
      >
        Notes
      </span>

      <HeaderForm />
    </header>
  );
};

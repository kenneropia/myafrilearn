import { cn } from "@/lib/cn";
import { SideBar } from "./SideBar";
import { Courses } from "../courses/Courses";

export default function Dashboard() {
  return (
    <section className="flex  h-full ml-[75px] xl:ml-[256px]">
      <SideBar />
      <Courses />
    </section>
  );
}

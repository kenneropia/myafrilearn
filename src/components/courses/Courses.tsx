import { cn } from "@/lib/cn";
import { Header } from "./Header";
import { CoursesTable } from "./CoursesTable";

export const Courses = () => {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <CoursesTable />
    </section>
  );
};

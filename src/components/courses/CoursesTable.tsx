"use client";
import { useGroupStore } from "@/hooks/use-group-store";
import { useSubjects } from "@/hooks/use-subjects";
import { useClassNotes } from "@/hooks/use-class-notes";
import { cn } from "@/lib/cn";
import { andika } from "@/lib/fonts";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import numbro from "numbro";
import { useTermStore } from "@/hooks/use-term-store";
import { useClassNoteSearch } from "@/hooks/use-class-note-search";
import { useSearchStore } from "@/hooks/use-search-store";

export const CoursesTable = () => {
  const searchParams = useSearchParams();
  const classGroupId = searchParams.get("classGroupId");
  if (!classGroupId)
    return (
      <div className="w-full h-full flex justify-center items-center text-xl">
        <p className="flex items-center justify-center h-[70vh] ">
          Please select a class
        </p>
      </div>
    );
  return <CoursesClient classGroupId={classGroupId} />;
};

const CoursesClient = ({ classGroupId }: { classGroupId: string }) => {
  const subjects = useSubjects(classGroupId);
  if (subjects.isLoading && !subjects.data)
    return (
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-40 h-40 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  return (
    <div className="flex flex-row w-full">
      <CourseSubjectSideHeader />
      <CourseLessonTable />
    </div>
  );
};

const CourseLessonTable = () => {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subjectId");

  if (!subjectId)
    return (
      <div className="w-full h-full flex justify-center  text-xl">
        <p className="flex  justify-center h-[70vh] ">
          Please select a subject
        </p>
      </div>
    );
  return <CourseLessonClient subjectId={subjectId} />;
};

const CourseLessonClient = ({ subjectId }: { subjectId: string }) => {
  const termStore = useTermStore();
  const classNotes = useClassNotes(subjectId);

  const { results } = useClassNoteSearch({
    dataSet: classNotes.data ? classNotes.data : [],
    keys: ["title", "classId.name", "subjectId.name"],
  });
  if (classNotes.isLoading && !classNotes.data)
    return (
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-40 h-40 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );

  if (!results)
    return (
      <div className="flex items-center justify-center w-full h-[70vh]">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          Search for another term
        </div>
      </div>
    );
  return (
    <table className="table h-auto w-5/6">
      <tr
        className={cn(
          "pl-5 inline-flex w-full items-center h-[59px] space-x-14",
          andika.className,
          "text-lg font-bold border-b-[5px] border-gray-700"
        )}
      >
        <td className="w-[38px]">ID</td>
        <td className="w-[115px]">Cover image</td>
        <td className="w-[393px]">Topic</td>
        <td className="w-[63px]">Viewed</td>
        <td className="w-[66px]">Actions</td>
      </tr>

      {results?.map((item) => {
        if (termStore.currentTerm && termStore.currentTerm !== item.termId.name)
          return null;
        return (
          <tr
            key={item._id}
            className="pl-5 group border-b border-b-[#B4B9CA] w-full hover:bg-[#ECEEF5]  inline-flex items-center h-[84px] space-x-14"
          >
            <td
              className={cn(
                "w-[38px]",
                andika.className,
                "text-base font-normal"
              )}
            >
              {item._id.substring(0, 4)}
            </td>
            <td className="w-[115px]">
              <Image
                className="border-[#4E5058] rounded-2xl border-2"
                width={"113"}
                height={"63"}
                alt="Course picture"
                src={
                  "https://s3-alpha-sig.figma.com/img/08c7/9202/38022ac6b93342afbbee6ce99411353a?Expires=1701648000&Signature=ldKm3L-nTHoAaclbxLRD81g8NtcyPyW6EmdK6hrLlSzsoV-AmLlor3G2krBOAI06pE5C8xdv2HBcwW0lYjfiG5Bt0ZqC0uBxfoJk8Ha0LB0rXogzmi4puc3-q4HGw0IfDhxmr~InGQjp0IBZz3r0Syq9Ki7Mq47f6uSlVRX5vFJ2kS3DO9c-ZCj0pQWzlSXP6Gd6iCNvl3wtilfO3i34Pw1ZiG9ThRrNFX36LtlfZMq74Du5TBDrNq-k4OntuF~Gy2gZ3XfyzxdEfOigocsDYVJPW3DobvMC86Mq4Or~Z68IE9wdDyzZbQBBwblqHsuEyNhIJWqQvtf9eaio4Lxong__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                }
              />
            </td>
            <td className="w-[393px]">{item.title}</td>
            <td className="w-[63px]">
              {numbro(item.views).format({ average: true, mantissa: 2 })}
            </td>
            <td className="invisible group-hover:visible inline-flex space-x-2 w-[115px]">
              <ActionGroup />
            </td>
          </tr>
        );
      })}
    </table>
  );
};
const CourseSubjectSideHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const groupStore = useGroupStore();
  const subjects = useSubjects(groupStore.currentGroup!);
  const changeSubjectParams = (val: string) => {
    console.log("testssts");
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    optionSearchParams.set("subjectId", val);

    router.push(`?${optionSearchParams}`);
  };
  return (
    <table
      className={cn(
        "flex h-auto items-center",
        andika.className,
        "text-[16px] table w-1/6  border-r-2  border-solid border-gray-700"
      )}
    >
      <tr className="flex px-5 py-3 w-full border-b-[5px] border-solid border-gray-700  h-[59px] ">
        <td className=" w-full font-bold">Subject</td>
      </tr>
      {subjects.data?.map((item) => {
        return (
          <tr
            key={item._id}
            className={cn(
              "flex justify-start  p-5 w-full min-h-[64px]",
              item._id == searchParams.get("subjectId") && "bg-[#45CD81]",
              item._id !== searchParams.get("subjectId") && "bg-[#ECEEF5]",
              item._id !== searchParams.get("subjectId") && "hover:bg-white"
            )}
          >
            <td
              className={cn(
                "inline-flex w-full ",
                item._id == searchParams.get("subjectId") && "font-bold"
              )}
            >
              <button
                className="text-left"
                onClick={() => changeSubjectParams(item._id)}
              >
                {item.name}
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

const ActionGroup = () => {
  return (
    <>
      <ActionButton>
        <Eye size={"15px"} />
      </ActionButton>
      <ActionButton>
        <Pencil size={"15px"} />
      </ActionButton>
      <ActionButton>
        <Trash2 size={"15px"} stroke="#BC4A4A" />
      </ActionButton>
    </>
  );
};

const ActionButton = ({ children }: { children: JSX.Element }) => {
  return (
    <button className="inline-flex items-center justify-center rounded-xl border border-[#4E5058] p-[9px] bg-white hover:bg-gray-100">
      {children}
    </button>
  );
};

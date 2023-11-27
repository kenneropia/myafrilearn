import { ClassNote } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useClassNoteSearch } from "./use-class-note-search";

export const useClassNotes = (subjectId: string) => {
  return useQuery<ClassNote[], Error>({
    queryKey: ["classNotes", subjectId],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-test-f4ae.up.railway.app/v1/lessons/bysubject/${subjectId}`
      );
      return response.data.data;
    },
  });
};

export default useClassNotes;

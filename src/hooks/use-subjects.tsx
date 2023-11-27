import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Subject = {
  _id: string;
  name: string;
  groupId: string;
};

export const useSubjects = (groupId: string) => {
  return useQuery<Subject[], Error>({
    queryKey: ["subjects", groupId],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-test-f4ae.up.railway.app/v1/subjects/bygroupId/${groupId}/`
      );
      return response.data.data;
    },
  });
};

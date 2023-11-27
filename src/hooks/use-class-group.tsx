import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define a type for the data
type Group = {
  _id: string;
  name: string;
  __v: number;
};

// Create a custom hook for fetching the data
export const useGroups = () => {
  return useQuery<Group[], Error>({
    queryKey: ["groups"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api-test-f4ae.up.railway.app/v1/classes/groups"
      );
      return response.data.data;
    },
  });
};

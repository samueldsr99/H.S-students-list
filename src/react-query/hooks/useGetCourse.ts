import { useQuery } from "@tanstack/react-query";
import studentListService from "@/lib/services";
import * as querykeys from "../querykeys";

const useGetCourse = () =>
  useQuery(querykeys.getCourse(), studentListService.courses.get);

export default useGetCourse;

import httpService from "../config/axios.config";
import { CourseModel } from "../models/course";

import { ServiceFunction } from "./types";

export type GetCourseRequest = void;
export type GetCourseResponse = CourseModel;

export interface CoursesService {
  get: ServiceFunction<GetCourseRequest, GetCourseResponse>;
}

const coursesService: CoursesService = {
  get: () => httpService.get("course/").then((r) => r.data),
};

export default coursesService;

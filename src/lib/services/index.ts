import coursesService, { CoursesService } from "./courses";

export interface StudentListService {
  courses: CoursesService;
}

const studentListService: StudentListService = {
  courses: coursesService,
};

export default studentListService;

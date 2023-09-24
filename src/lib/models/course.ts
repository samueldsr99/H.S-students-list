import { BaseModel } from "./base";
import { StudentModel } from "./student";

export interface CourseModel extends BaseModel {
  name: string;
  startDate: string;
  endDate: string;
  campus: string;
  students: StudentModel[];
}

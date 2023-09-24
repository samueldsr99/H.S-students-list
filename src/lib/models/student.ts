import { BaseModel } from "./base";

export interface StudentModel extends BaseModel {
  firstName: string;
  lastName: string;
  programName: string;
  degree: string;
  photo: {
    title: string;
    file: string;
  };
  startDate: string;
  campus: string;
}

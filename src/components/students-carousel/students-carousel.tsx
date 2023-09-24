import { useState } from "react";

import Avatar from "@/components/atoms/avatar";
import { Carousel, CarouselItem } from "@/components/atoms/carousel";
import { StudentModel } from "@/lib/models/student";

import StudentCard from "../student-card/student-card";

import styles from "./students-carousel.module.css";

export interface StudentsCarouselProps {
  students: StudentModel[];
}

const StudentsCarousel = ({ students }: StudentsCarouselProps) => {
  const [currentStudent, setCurrentStudent] = useState(students[0]);

  return (
    <>
      <StudentCard {...currentStudent} />
      <Carousel className={styles.carousel}>
        {students.map((student) => (
          <CarouselItem key={student.id}>
            <button className={styles.button} onClick={() => setCurrentStudent(student)}>
              <Avatar
                src={`https:${student.photo.file}`}
                alt={student.photo.title}
                width={96}
                height={96}
                active={student.id === currentStudent.id}
              />
              <div className={styles.itemFooter}>
                <p>
                  {student.firstName} {student.lastName}
                </p>
                <span className={styles.studentProgramName}>{student.programName}</span>
              </div>
            </button>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
};

export default StudentsCarousel;

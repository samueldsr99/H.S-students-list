import { format } from "date-fns";

import { StudentModel } from "@/lib/models/student";

export type StudentCardProps = StudentModel;

import Image from "next/image";

import styles from "./student-card.module.css";

const StudentCard = ({ photo, firstName, lastName, programName, degree, campus, startDate }: StudentCardProps) => {
  const rows = [
    {
      id: 1,
      name: "Program",
      value: programName,
    },
    {
      id: 2,
      name: "Degree",
      value: degree,
    },
    {
      id: 3,
      name: "Campus",
      value: campus,
    },
    {
      id: 4,
      name: "Start Date",
      value: format(new Date(startDate), "MMMM yyyy"),
    },
  ];

  return (
    <article className={styles.root}>
      <div className={styles.flexContainer}>
        {photo ? (
          // https Prefix is missing in photo.file
          <Image className={styles.photo} src={`https:${photo.file}`} alt={photo.title} width={128} height={128} />
        ) : (
          <div />
        )}
        <div>
          <p className={styles.studentFullName}>
            {firstName} {lastName}
          </p>
          <div className={styles.studentDetailsContainer}>
            {rows.map((row) => (
              <div key={row.id} className={styles.studentDetailsRow}>
                <span className={styles.studentDetailsRowTitle}>{row.name}</span>
                <span className={styles.studentDetailsRowDescription}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default StudentCard;

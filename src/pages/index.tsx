import { GetServerSideProps, NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import StudentsCarousel from "@/components/students-carousel/students-carousel";
import studentListService from "@/lib/services";
import { GetCourseResponse } from "@/lib/services/courses";

import styles from "./index.module.css";

const inter = Inter({
  subsets: ["latin"],
});

interface PageProps {
  course: GetCourseResponse;
}

const Home: NextPage<PageProps> = ({ course }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Students List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.main}`}>
        <section className={styles.section}>
          <h1 className={styles.courseName}>{course?.name}</h1>
          <span className={styles.courseDateRange}>
            {course?.startDate} - {course?.endDate}
          </span>
          <span className={styles.courseCampus}>{course?.campus}</span>
          {!!course && <StudentsCarousel students={course.students} />}
        </section>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const course = await studentListService.courses.get();

  return {
    props: { course },
  };
};

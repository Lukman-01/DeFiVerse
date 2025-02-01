import React from "react";
import CourseIdPage from "../components/CourseIdPage";
import { courses } from "../data/data";

const CoursePage = async ({ params }: { params: { courseId: string } }) => {
  const urlToTitle = decodeURIComponent(params.courseId as string);
  const pageData = courses.find(item => item.title === urlToTitle);

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate">Course Not Found</h2>
          <p className="mt-2 text-slate">The requested course could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" aria-label="Course Page">
      <main className="flex-grow w-full">
        <div className="">
          <div className="prose p-5">
            <CourseIdPage data={pageData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;


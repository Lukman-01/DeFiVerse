"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../../components/LandingPage/Header';
import Footer from '../../../../components/LandingPage/Footer';

// Define TypeScript interfaces for better type safety
interface CourseContent {
  title: string;
  description: string;
  category: string;
  content: string;
  // Add other course content properties as needed
}

interface CourseData {
  [key: string]: CourseContent;
}

const CoursePage = () => {
  const params = useParams();
  const courseId = params.courseId as string;
  const [courseData, setCourseData] = React.useState<CourseContent | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadCourseData = async () => {
      try {
        // Dynamic import of course data based on courseId
        const module = await import(`../data/${courseId}.tsx`);
        setCourseData(module.default);
      } catch (error) {
        console.error('Failed to load course data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      loadCourseData();
    }
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Course Not Found</h2>
          <p className="mt-2 text-gray-600">The requested course could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="mb-8">
            <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
              {courseData.category}
            </span>
            <h1 className="text-3xl font-bold mt-4 mb-2">{courseData.title}</h1>
            <p className="text-gray-600">{courseData.description}</p>
          </div>

          {/* Course Content */}
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: courseData.content }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
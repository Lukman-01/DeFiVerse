"use client";

import { useRouter } from "next/navigation";
import { quizData } from "./datas/quizData";
import Footer from "~~/components/LandingPage/Footer";

export default function QuizPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test Blockchain Knowledge
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated courses designed to take you from DeFi basics to advanced concepts. Each course is
            crafted by industry experts to provide you with practical knowledge.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizData.map((quiz, index) => (
            <CourseCard key={index} quiz={quiz} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const CourseCard = ({
  quiz: {  description, image,  title },
}: {
  quiz: {
    id: number;
    title: string;
    description: string;
    image: string;
    questions: {
      question: string;
      options: string[];
      correctAnswer: string;
    }[];
  };
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/quiz/${title}`)}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
    >
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white mt-2">{title} Quiz</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button className="text-blue-600 hover:underline text-sm font-medium">Start Quiz →</button>
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};


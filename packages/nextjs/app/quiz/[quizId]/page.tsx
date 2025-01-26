"use client";

import { useState } from "react";
import Image from "next/image";
import Quiz from "../components/Quiz";
import { quizData } from "../datas/quizData";
import toast from "react-hot-toast";

export default function QuizId({ params }: { params: { quizId: string } }) {
  const urlToTitle = decodeURIComponent(params.quizId as string);
  const pageData = quizData.find(item => item.title === urlToTitle);

  const [start, setStart] = useState<boolean>(false);

  if (!pageData) return <DataNotFound />;

  if (start) return <Quiz questionData={pageData} />;

  return (
    <div className="flex-1 -mt-[84px] bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        <div className="relative min-h-[200px] w-full h-full overflow-hidden">
          <Image
            fill
            src={pageData.image}
            priority
            className="object-cover object-center w-full"
            alt={pageData.title}
          />
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold">{pageData.title} Quiz</h2>
          <p className="text-base mb-2.5 ">{pageData.description}</p>
          <p className="text-sm font-mono mb-8 mt-0">{pageData.questions.length} Question(s)</p>

          <button
            className="px-5 w-full py-3.5 rounded-lg font-medium bg-blue-600 text-white active:translate-y-1 hover:opacity-85 transition-all duration-300"
            onClick={() => {
              if (!pageData.questions.length) {
                toast(`There's no question in this quiz`, {
                  style: { background: "red", color: "white" },
                });
                return;
              }
              setStart(true);
            }}
          >
            Start Qiuz
          </button>
        </div>
      </div>
    </div>
  );
}

function DataNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate">Quiz Not Found</h2>
        <p className="mt-2 text-slate">The requested quiz could not be found.</p>
      </div>
    </div>
  );
}

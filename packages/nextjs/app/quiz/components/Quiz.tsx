"use client";

import React, { useEffect, useState } from "react";
import { QuizQuestions } from "../../../components/Navigations/ExpandableQuiz";
import { Award, CheckCircle2, Clock, PieChart, XCircle } from "lucide-react";

const Quiz = ({
  questionData,
}: {
  questionData: {
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [animateScore, setAnimateScore] = useState(false);

  const currentQuizQuestion = questionData.questions[currentQuestion];

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showScore]);

  const handleAnswerClick = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === currentQuizQuestion.correctAnswer) {
      setScore(score + 1);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 500);
    }
    handleNextQuestion();
  };

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionData.questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setTimeLeft(30);
      }, 500);
    } else {
      setTimeout(() => setShowScore(true), 500);
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
  };

  if (showScore) {
    return (
      <Score score={score} timeLeft={timeLeft} questionLenght={questionData.questions.length} onRestart={restartQuiz} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{questionData.title} Quiz</h2>
            <p className="text-sm">
              Question {currentQuestion + 1} of {questionData.questions.length}
            </p>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2" />
            <span className={`text-lg font-bold ${timeLeft <= 10 ? "text-red-300" : "text-white"}`}>{timeLeft}s</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-indigo-800">{currentQuizQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuizQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full text-left flex items-center justify-between gap-1.5 p-3 rounded-lg transition-all duration-200 transform hover:scale-[1.03] 
                  ${
                    selectedAnswer === option
                      ? option === currentQuizQuestion.correctAnswer
                        ? "bg-green-100 border-2 border-green-500"
                        : "bg-red-100 border-2 border-red-500"
                      : "bg-indigo-50 hover:bg-indigo-100"
                  }`}
              >
                <span className="font-medium text-blue-600">
                  {index === 0 ? "A" : index === 1 ? "B" : index === 2 ? "C" : "D"}.
                </span>
                <span className="flex-1">{option}</span>
                <span className="shrink-0">
                  {selectedAnswer === option &&
                    (option === currentQuizQuestion.correctAnswer ? (
                      <CheckCircle2 className=" text-green-500" />
                    ) : (
                      <XCircle className=" text-red-500" />
                    ))}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-indigo-50 p-2">
          <div className={`h-1 bg-purple-600 transition-all duration-500 ${animateScore ? "w-full" : "w-0"}`} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;

function Score({
  score,
  questionLenght,
  timeLeft,
  onRestart,
}: {
  score: number;
  questionLenght: number;
  timeLeft: number;
  onRestart: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 text-center">
          <Award className="mx-auto mb-4 w-16 h-16 text-yellow-300" strokeWidth={1.5} />
          <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
        </div>
        <div className="p-6 text-center">
          <div className="flex justify-around mb-6">
            <div className="flex items-center">
              <PieChart className="mr-2 text-purple-600" />
              <span className="font-semibold text-lg">
                Score: {score}/{questionLenght}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 text-indigo-600" />
              <span className="font-semibold text-lg">Time: {questionLenght * 30 - timeLeft}s</span>
            </div>
          </div>
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

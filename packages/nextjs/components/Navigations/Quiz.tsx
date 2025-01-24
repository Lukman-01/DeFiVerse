'use client';

import React, { useState, useEffect } from 'react';
import { Award, PieChart, Clock, CheckCircle2, XCircle, Play } from 'lucide-react';
import { QuizQuestions } from './ExpandableQuiz';

const DeFiQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [animateScore, setAnimateScore] = useState(false);
  const [quizQuestions] = useState(QuizQuestions);
  const [quizStarted, setQuizStarted] = useState(false);


  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft, showScore]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleTimeUp = () => {
    setShowScore(true);
  };

  const handleAnswerClick = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);
    
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 500);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setTimeLeft(30);
      }, 500);
    } else {
      setTimeout(() => setShowScore(true), 500);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 text-center">
            <Award className="mx-auto mb-4 w-16 h-16 text-yellow-300" strokeWidth={1.5} />
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
          </div>
          <div className="p-6 text-center">
            <div className="flex justify-around mb-6">
              <div className="flex items-center">
                <PieChart className="mr-2 text-purple-600" />
                <span className="font-semibold text-lg">
                  Score: {score}/{quizQuestions.length}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-indigo-600" />
                <span className="font-semibold text-lg">
                  Time: {quizQuestions.length * 30 - timeLeft}s
                </span>
              </div>
            </div>
            <button 
              onClick={restartQuiz} 
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">DeFi Quiz</h2>
            <p className="text-sm">Question {currentQuestion + 1} of {quizQuestions.length}</p>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2" />
            <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-300' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-indigo-800">
            {currentQuizQuestion.question}
          </h3>
          <div className="space-y-3">
            {currentQuizQuestion.options.map((option:any, index:any) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`w-full text-left p-3 rounded-lg transition transform hover:scale-105 
                  ${selectedAnswer === option 
                    ? option === currentQuizQuestion.correctAnswer 
                      ? 'bg-green-100 border-2 border-green-500' 
                      : 'bg-red-100 border-2 border-red-500'
                    : 'bg-indigo-50 hover:bg-indigo-100'}`}
              >
                {option}
                {selectedAnswer === option && (
                  option === currentQuizQuestion.correctAnswer 
                    ? <CheckCircle2 className="float-right text-green-500" /> 
                    : <XCircle className="float-right text-red-500" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-indigo-50 p-2">
          <div 
            className={`h-1 bg-purple-600 transition-all duration-500 ${animateScore ? 'w-full' : 'w-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default DeFiQuiz;


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { 
//   Award, 
//   PieChart, 
//   Clock, 
//   CheckCircle2, 
//   XCircle, 
//   Play, 
//   RefreshCw, 
//   Info 
// } from 'lucide-react';
// import { QuizQuestions } from './ExpandableQuiz';

// interface QuizQuestion {
//   question: string;
//   options: string[];
//   correctAnswer: string;
// }

// const DeFiQuiz = () => {
//   // State variables
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [animateScore, setAnimateScore] = useState(false);
//   const [quizQuestions] = useState<QuizQuestion[]>(QuizQuestions);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [showInstructions, setShowInstructions] = useState(false);
//   const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

//   // Timer and game logic
//   useEffect(() => {
//     if (quizStarted && timeLeft > 0 && !showScore) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0) {
//       handleTimeUp();
//     }
//   }, [timeLeft, showScore, quizStarted]);

//   // Start quiz with selected difficulty
//   const startQuiz = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
//     setDifficulty(selectedDifficulty);
//     setQuizStarted(true);
//     setTimeLeft(getDifficultyTime(selectedDifficulty));
//   };

//   // Get time based on difficulty
//   const getDifficultyTime = (diff: 'easy' | 'medium' | 'hard') => {
//     switch (diff) {
//       case 'easy': return 45;
//       case 'medium': return 30;
//       case 'hard': return 15;
//     }
//   };

//   // Time up handler
//   const handleTimeUp = () => {
//     setShowScore(true);
//   };

//   // Answer selection handler
//   const handleAnswerClick = (selectedOption: string) => {
//     setSelectedAnswer(selectedOption);
    
//     if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//       setAnimateScore(true);
//       setTimeout(() => setAnimateScore(false), 500);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < quizQuestions.length) {
//       setTimeout(() => {
//         setCurrentQuestion(nextQuestion);
//         setSelectedAnswer(null);
//         setTimeLeft(getDifficultyTime(difficulty));
//       }, 500);
//     } else {
//       setTimeout(() => setShowScore(true), 500);
//     }
//   };

//   // Quiz restart
//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowScore(false);
//     setSelectedAnswer(null);
//     setTimeLeft(getDifficultyTime(difficulty));
//   };

//   // Difficulty selection screen
//   if (!quizStarted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden text-center p-8">
//           <h1 className="text-3xl font-bold text-indigo-800 mb-6">DeFi Quiz Challenge</h1>
          
//           {/* Instructions Toggle */}
//           <button 
//             onClick={() => setShowInstructions(!showInstructions)}
//             className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800"
//           >
//             <Info />
//           </button>

//           {/* Instructions Overlay */}
//           {showInstructions && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-6 rounded-lg max-w-md">
//                 <h2 className="text-2xl font-bold mb-4">Quiz Instructions</h2>
//                 <ul className="text-left list-disc pl-5 space-y-2">
//                   <li>Answer questions within the time limit</li>
//                   <li>Select the most appropriate answer</li>
//                   <li>Your score depends on correct answers</li>
//                   <li>Different difficulties have varying time limits</li>
//                 </ul>
//                 <button 
//                   onClick={() => setShowInstructions(false)}
//                   className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}

//           <p className="text-gray-600 mb-8">Choose Your Difficulty</p>
//           <div className="space-y-4">
//             <button 
//               onClick={() => startQuiz('easy')}
//               className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
//             >
//               <Play className="mr-2" /> Easy (45s)
//             </button>
//             <button 
//               onClick={() => startQuiz('medium')}
//               className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center"
//             >
//               <Play className="mr-2" /> Medium (30s)
//             </button>
//             <button 
//               onClick={() => startQuiz('hard')}
//               className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center"
//             >
//               <Play className="mr-2" /> Hard (15s)
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Score screen
//   if (showScore) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
//           <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 text-center">
//             <Award className="mx-auto mb-4 w-16 h-16 text-yellow-300" strokeWidth={1.5} />
//             <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
//           </div>
//           <div className="p-6 text-center">
//             <div className="flex justify-around mb-6">
//               <div className="flex items-center">
//                 <PieChart className="mr-2 text-purple-600" />
//                 <span className="font-semibold text-lg">
//                   Score: {score}/{quizQuestions.length}
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="mr-2 text-indigo-600" />
//                 <span className="font-semibold text-lg">
//                   Time: {quizQuestions.length * getDifficultyTime(difficulty) - timeLeft}s
//                 </span>
//               </div>
//             </div>
//             <div className="space-y-4">
//               <button 
//                 onClick={restartQuiz} 
//                 className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105 flex items-center justify-center"
//               >
//                 <RefreshCw className="mr-2" /> Restart Quiz
//               </button>
//               <button 
//                 onClick={() => setQuizStarted(false)} 
//                 className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition transform hover:scale-105"
//               >
//                 Change Difficulty
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Active quiz screen
//   const currentQuizQuestion = quizQuestions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
//         <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold">DeFi Quiz</h2>
//             <p className="text-sm">Question {currentQuestion + 1} of {quizQuestions.length}</p>
//           </div>
//           <div className="flex items-center">
//             <Clock className="mr-2" />
//             <span className={`text-lg font-bold ${timeLeft <= 5 ? 'text-red-300' : 'text-white'}`}>
//               {timeLeft}s
//             </span>
//           </div>
//         </div>
//         <div className="p-6">
//           <h3 className="text-lg font-semibold mb-4 text-indigo-800">
//             {currentQuizQuestion.question}
//           </h3>
//           <div className="space-y-3">
//             {currentQuizQuestion.options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerClick(option)}
//                 className={`w-full text-left p-3 rounded-lg transition transform hover:scale-105 
//                   ${selectedAnswer === option 
//                     ? option === currentQuizQuestion.correctAnswer 
//                       ? 'bg-green-100 border-2 border-green-500' 
//                       : 'bg-red-100 border-2 border-red-500'
//                     : 'bg-indigo-50 hover:bg-indigo-100'}`}
//               >
//                 {option}
//                 {selectedAnswer === option && (
//                   option === currentQuizQuestion.correctAnswer 
//                     ? <CheckCircle2 className="float-right text-green-500" /> 
//                     : <XCircle className="float-right text-red-500" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="bg-indigo-50 p-2">
//           <div 
//             className={`h-1 bg-purple-600 transition-all duration-500 ${animateScore ? 'w-full' : 'w-0'}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeFiQuiz;
import { useMemo, useState, type FC } from "react";
import Page from "../../components/Page";
import { getRandomQuestions, type Question } from "./data/questons";

const Boss: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredId, setAnsweredId] = useState<number | null>(null);

  const [currentState, setCurrentState] = useState<
    "waiting" | "started" | "response" | "won" | "lost"
  >("waiting");

  const handleStartQuiz = () => {
    const newQuestions = getRandomQuestions(3);
    setCurrentQuestionIndex(0);
    setQuestions(newQuestions);
    setCurrentState("started");
  };

  const handleQuestionAnswered = (index: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentState === "response") {
      if (currentQuestion.answerId === answeredId) {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setCurrentState("started");
        } else {
          setCurrentState("won");
        }
      } else {
        setCurrentState("lost");
      }
    } else if (currentState === "started") {
      setCurrentState("response");
      setAnsweredId(index);
    }
  };

  const handleContinue = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answerId === answeredId) {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentState("started");
      } else {
        setCurrentState("won");
      }
    } else {
      setCurrentState("lost");
    }
  };

  const currentQuestion = useMemo(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      return questions[currentQuestionIndex];
    }
    return null;
  }, [questions, currentQuestionIndex]);

  return (
    <Page>
      {currentState === "waiting" && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Get ready to fight the boss !
          </h1>
          <button
            onClick={handleStartQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Start Quiz
          </button>
        </div>
      )}
      {["started", "response"].includes(currentState) && currentQuestion && (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {currentQuestion.question}
          </h2>
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {currentQuestion.availableAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleQuestionAnswered(index)}
                className={
                  "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition text-left" +
                  (currentState === "response" &&
                  currentQuestion.answerId === index
                    ? " bg-green-300"
                    : "") +
                  (currentState === "response" &&
                  currentQuestion.answerId !== index
                    ? " bg-red-300"
                    : "")
                }
              >
                {answer}
              </button>
            ))}
          </div>
          {currentState === "response" && (
            <button
              onClick={handleContinue}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Continue
            </button>
          )}
        </div>
      )}

      {currentState === "won" && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Congratulations! You defeated the boss!
          </h1>
          <button
            onClick={handleStartQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </div>
      )}

      {currentState === "lost" && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-6 text-center">
            You were defeated by the boss. Try again!
          </h1>
          <button
            onClick={handleStartQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </Page>
  );
};

export default Boss;

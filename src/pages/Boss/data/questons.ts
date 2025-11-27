export interface Question {
  id: number;
  question: string;
  availableAnswers: string[];
  answerId: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "what is a  zero-day vulnerability ?",
    availableAnswers: [
      "A vulnerability that has been patched by the vendor",
      "A vulnerability that is known to the public",
      "A vulnerability that is unknown to the vendor and has no patch",
      "A vulnerability that only affects zero-day-old software",
    ],
    answerId: 2,
  },
  {
    id: 2,
    question: "What is phishing?",
    availableAnswers: [
      "A technique used to catch fish using the internet",
      "A cyber attack that uses social engineering to trick users into revealing sensitive information",
      "A method of encrypting data for secure communication",
      "A type of malware that replicates itself to spread to other computers",
    ],
    answerId: 1,
  },
  {
    id: 3,
    question: "What does VPN stand for?",
    availableAnswers: [
      "Virtual Private Network",
      "Very Personal Network",
      "Verified Public Network",
      "Virtual Protected Node",
    ],
    answerId: 0,
  },
];

export const getRandomQuestions = (amount: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(amount, questions.length));
};

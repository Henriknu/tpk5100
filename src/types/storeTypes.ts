interface Question {
  question: string;
  options: string[];
  answerIndex: number;
}

interface Category {
  name: string;
  questions: Question[];
}

export { Question, Category };

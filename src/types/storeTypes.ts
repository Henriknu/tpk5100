interface Question {
  question: string;
  options: string[];
  answerIndex: number;
}

interface Category {
  name: string;
  terms: {
    questions: Question[];
  };
  summary: {
    questions: Question[];
  };
}

class Quiz {
  questions: Question[];
  points: number;
  limit: number;
  questionCounter: number;
  correctQuestionsCounter: number;
  initialLength: number;
  constructor(questions: Question[], limit: number) {
    this.questions = questions;
    this.points = 0;
    this.limit = limit;
    this.questionCounter = 1;
    this.correctQuestionsCounter = 0;
    this.initialLength = questions.length;
  }
}

export { Question, Category, Quiz };

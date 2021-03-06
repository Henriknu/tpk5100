interface Question {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
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
  redirectToQuiz: boolean;
  chapterNumber: number | undefined;
  constructor(
    questions: Question[],
    limit: number,
    redirectToQuiz: boolean,
    chapterNumber?: number
  ) {
    this.questions = questions;
    this.points = 0;
    this.limit = limit;
    this.questionCounter = 1;
    this.correctQuestionsCounter = 0;
    this.initialLength = questions.length;
    this.redirectToQuiz = redirectToQuiz;
    this.chapterNumber = chapterNumber;
  }
}

export { Question, Category, Quiz };

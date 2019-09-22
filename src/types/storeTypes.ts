interface State {
  categories: Category[];
  chosenCategories: Category[];
  quiz: Quiz | null;
  limit: number;
}

interface Question {
  question: string;
  options: string[];
  answerIndex: number;
}

interface Category {
  name: string;
  questions: Question[];
}

class Quiz {
  questions: Question[];
  points: number;
  limit: number;
  constructor(questions: Question[], limit: number) {
    this.questions = questions;
    this.points = 0;
    this.limit = limit;
  }
}

export { State, Question, Category, Quiz };

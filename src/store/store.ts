import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Question, Category, Quiz } from "../types/storeTypes";

Vue.use(Vuex);

export interface RootState {
  categories: Category[];
  chosenCategories: Category[];
  quiz: Quiz | null;
  multiSelect: boolean;
  limit: number;
  totalQuizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalQuestionsCorrect: number;
  sumOfPercentage: number;
  isMobile: boolean;
}

const store: StoreOptions<RootState> = {
  state: {
    categories: Array<Category>(),
    chosenCategories: Array<Category>(),
    quiz: null,
    multiSelect: false,
    limit: 10,
    totalQuizzesCompleted: 0,
    totalQuestionsAnswered: 0,
    totalQuestionsCorrect: 0,
    sumOfPercentage: 0,
    isMobile: window.innerWidth < 600,
  },
  getters: {
    getAllQuestions: (state): Question[] => {
      const questions: Question[] = [];
      state.chosenCategories.forEach(category => {
        category.summary.questions.forEach((question: Question) => {
          questions.push(question);
        });
        category.terms.questions.forEach((question: Question) => {
          questions.push(question);
        });
      });
      return questions;
    },
    //Minus 2 on index, because starting on chapter 2.
    getTermsQuestions: state => (questionNumber: number): Question[] => {
      const questions: Question[] = [];
      const category: Category = state.categories[questionNumber - 2];
      category.terms.questions.forEach((question: Question) => {
        questions.push(question);
      });
      return questions;
    },
    getSummaryQuestions: state => (questionNumber: number): Question[] => {
      const questions: Question[] = [];
      const category: Category = state.categories[questionNumber - 2];
      category.summary.questions.forEach((question: Question) => {
        questions.push(question);
      });
      return questions;
    },
    getQuestion: state => (index: number): Question => {
      return state.quiz!.questions[index];
    },
  },
  mutations: {
    setCategories: (state, categories: Category[]): void => {
      state.categories = categories;
    },
    setChosenCategories: (state, categories: Category[]): void => {
      state.chosenCategories = categories;
    },
    setQuiz: (state, quiz: Quiz | null): void => {
      state.quiz = quiz;
    },
    setLimit: (state, limit: number): void => {
      state.limit = limit;
    },
    setMultiSelect: (state, value: boolean): void => {
      state.multiSelect = value;
    },
    incrementQuestionCounter: (state): void => {
      state.quiz!.questionCounter += 1;
    },
    incrementCorrectQuestionCounter: (state): void => {
      state.quiz!.correctQuestionsCounter += 1;
    },
    incrementTotalQuizzesCompleted: (state): void => {
      state.totalQuizzesCompleted += 1;
    },
    resetTotalQuizzesCompleted: (state): void => {
      state.totalQuizzesCompleted = 0;
    },
    addToTotalQuestionsAnswered: (state, totalQuestions): void => {
      state.totalQuestionsAnswered += totalQuestions;
    },
    resetTotalQuestionsAnswered: (state): void => {
      state.totalQuestionsAnswered = 0;
    },
    addToTotalQuestionsCorrect: (state, totalQuestionsCorrect): void => {
      state.totalQuestionsCorrect += totalQuestionsCorrect;
    },
    resetTotalQuestionsCorrect: (state): void => {
      state.totalQuestionsCorrect = 0;
    },
    addToSumOfPercentage: (state, percentage): void => {
      state.sumOfPercentage += percentage;
    },
    resetSumOfPercentage: (state): void => {
      state.sumOfPercentage = 0;
    },
    updateChosenCategories: (state, category: Category): void => {
      let newChosenCategories = null;
      if (state.chosenCategories.some(cat => cat.name === category.name)) {
        newChosenCategories = state.chosenCategories.filter(
          cat => cat.name !== category.name
        );
      } else {
        newChosenCategories = [...state.chosenCategories];
        newChosenCategories.push(category);
      }
      state.chosenCategories = newChosenCategories;
    },
    removeQuestion: (state, question: Question): void => {
      console.log(state.quiz!.questions);
      state.quiz!.questions = state.quiz!.questions.filter(
        q => q.question !== question.question
      );
      console.log(state.quiz!.questions);
    },
    setIsMobile: (state, isMobile: boolean): void => {
      state.isMobile = isMobile;
    },
  },
  actions: {
    initiateCategories: ({ commit }): void => {
      fetch("data/categories.json")
        .then(res => res.json())
        .then(data => {
          const categories = Object.values(data)[0];
          commit("setCategories", categories);
        });
    },
    updateStats: (
      { commit },
      { totalQuestions, totalQuestionsCorrect }
    ): void => {
      commit("incrementTotalQuizzesCompleted");
      commit("addToTotalQuestionsAnswered", totalQuestions);
      commit("addToTotalQuestionsCorrect", totalQuestionsCorrect);
      commit("addToSumOfPercentage", totalQuestionsCorrect / totalQuestions);
    },
    resetStats: ({ commit }): void => {
      commit("resetTotalQuizzesCompleted");
      commit("resetTotalQuestionsAnswered");
      commit("resetTotalQuestionsCorrect");
      commit("resetSumOfPercentage");
    },
    onQuizCompleted: ({ commit }): void => {
      commit("setChosenCategories", []);
      commit("setQuiz", null);
    },
    updateSettings: ({ commit }, { limit }): void => {
      commit("setLimit", limit);
    },
  },
};

export default new Vuex.Store<RootState>(store);

import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Question, Category, Quiz } from "../types/storeTypes";

Vue.use(Vuex);

export interface RootState {
  categories: Category[];
  chosenCategories: Category[];
  quiz?: Quiz;
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
    limit: 10,
    totalQuizzesCompleted: 0,
    totalQuestionsAnswered: 0,
    totalQuestionsCorrect: 0,
    sumOfPercentage: 0,
    isMobile: window.innerWidth < 600,
  },
  getters: {
    getQuestions: (state): Question[] => {
      let questions: Question[] = [];
      state.chosenCategories.forEach(category => {
        category.questions.forEach((question: Question) => {
          questions.push(question);
        });
      });
      return questions;
    },
    getQuizQuestions: (state): Question[] => {
      return state.quiz!.questions;
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
    setQuiz: (state, quiz: Quiz) => {
      state.quiz = quiz;
    },
    incrementQuestionCounter: state => {
      state.quiz!.questionCounter += 1;
    },
    incrementCorrectQuestionCounter: state => {
      state.quiz!.correctQuestionsCounter += 1;
    },
    incrementTotalQuizzesCompleted: state => {
      state.totalQuizzesCompleted += 1;
    },
    addToTotalQuestionsAnswered: (state, totalQuestions) => {
      state.totalQuestionsAnswered += totalQuestions;
    },
    addToTotalQuestionsCorrect: (state, totalQuestionsCorrect) => {
      state.totalQuestionsCorrect += totalQuestionsCorrect;
    },
    addToSumOfPercentage: (state, percentage) => {
      state.sumOfPercentage += percentage;
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
    initiateCategories: ({ state, commit }): void => {
      fetch("data/categories.json")
        .then(res => res.json())
        .then(data => {
          let categories = Object.values(data)[0];
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
  },
};

export default new Vuex.Store<RootState>(store);

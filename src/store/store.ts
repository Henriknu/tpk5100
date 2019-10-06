import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Question, Category, Quiz } from "../types/storeTypes";
import { actions } from "./actions";

Vue.use(Vuex);

export interface RootState {
  categories: Category[];
  chosenCategories: Category[];
  quiz?: Quiz;
  limit: number;
}

const store: StoreOptions<RootState> = {
  state: {
    categories: Array<Category>(),
    chosenCategories: Array<Category>(),
    limit: 10,
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
  },
  actions,
};

export default new Vuex.Store<RootState>(store);

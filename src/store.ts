import Vue from "vue";
import Vuex from "vuex";
import { State, Question, Category, Quiz } from "./types/storeTypes";

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    categories: Array<Category>(),
    chosenCategories: Array<Category>(),
    quiz: null,
    limit: 10
  },
  getters: {
    getQuestions: state => {
      let questions: Question[] = [];
      state.chosenCategories.forEach(category => {
        category.questions.forEach((question: Question) => {
          questions.push(question);
        });
      });
      return questions;
    },
    getQuizQuestions: state => {
      return state.quiz ? state.quiz.questions : null;
    }
  },
  mutations: {
    setCategories: (state, categories: Category[]) => {
      state.categories = categories;
    },
    setChosenCategories: (state, categories: Category[]) => {
      state.chosenCategories = categories;
    },
    setQuiz: (state, quiz: Quiz) => {
      state.quiz = quiz;
    },
    updateChosenCategories: (state, category: Category) => {
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
    }
  },
  actions: {
    initiateCategories: ({ state, commit }) => {
      fetch("data/categories.json")
        .then(res => res.json())
        .then(data => {
          let categories = Object.values(data)[0];
          commit("setCategories", categories);
        });
    }
  }
});

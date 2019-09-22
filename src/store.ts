import Vue from "vue";
import Vuex from "vuex";
import { Question, Category } from "./types/storeTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: Array<Category>(),
    chosenCategories: Array<Category>()
  },
  getters: {
    getQuestions: state => {
      let questions: Question[] = [];
      console.log(questions);
      state.chosenCategories.forEach(category => {
        category.questions.forEach((question: Question) => {
          questions.push(question);
        });
      });
      console.log(questions);
      return questions;
    }
  },
  mutations: {
    setCategories: (state, categories: Category[]) => {
      state.categories = categories;
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

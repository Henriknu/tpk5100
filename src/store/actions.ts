import { ActionTree } from "vuex";
import { RootState } from ".";
import { Question } from "@/types/storeTypes";

export const actions: ActionTree<RootState, RootState> = {
  initiateCategories: ({ state, commit }) => {
    fetch("data/categories.json")
      .then(res => res.json())
      .then(data => {
        let categories = Object.values(data)[0];
        commit("setCategories", categories);
      });
  },
  popQuestion: ({ state }): Question => {
    let question: Question | undefined = state.quiz!.questions.pop();
    if (typeof question !== "undefined") {
      return question;
    }
    throw new Error("Tried to pop question, but questions was empty!");
  },
};

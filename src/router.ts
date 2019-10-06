import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { Question } from "./types/storeTypes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/quiz",
      name: "quiz",

      component: () => import("./views/QuizPage.vue"),
    },
    {
      path: "/quizInstance",
      name: "quiz instance",
      component: () => import("./views/QuizInstance.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("./views/ResultPage.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      component: () => import("./views/StatsPage.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/SettingsPage.vue"),
    },
  ],
});

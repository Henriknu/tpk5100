/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
    {
      path: "/learnMore",
      name: "learnMore",
      component: () => import("./views/LearnMorePage.vue"),
    },
    {
      path: "/chapter4",
      name: "chapter4",
      component: () => import("./views/chapters/Chapter4.vue"),
    },
  ],
});

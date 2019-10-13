<template>
  <div class="container">
    <Nav header-text="Quiz"></Nav>
    <div class="p-category-div">
      <p>Select what topics you want to focus on.</p>
    </div>
    <div>
      <CategorySelector />
    </div>
    <div class="button-div">
      <v-btn @click="startQuiz" x-large class="quiz-start-button">Start Quiz</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import CategorySelector from "../components/CategorySelector.vue";
import Vue from "vue";
import { Quiz, Question } from "../types/storeTypes";
import Nav from "../components/Nav.vue";

export default Vue.extend({
  components: {
    CategorySelector,
    Nav,
  },
  computed: {
    limit(): number {
      return this.$store.state.limit;
    },
  },
  methods: {
    startQuiz(): void {
      const questions = this.$store.getters.getQuestions;
      function shuffleArray(array: Question[]): void {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      shuffleArray(questions);
      const end =
        this.limit <= questions.length ? this.limit - 1 : questions.length - 1;
      const sample = questions.slice(0, end);
      const quiz = new Quiz(sample, this.limit);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
  },
});
</script>

<style scoped>
p {
  padding-top: 20px;
  padding-left: 35px;
}

.button-div {
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
  justify-content: center;
}
</style>

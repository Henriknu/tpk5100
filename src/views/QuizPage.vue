<template>
  <div :key="startedQuiz" class="container">
    <Nav header-text="Quiz"></Nav>
    <div class="p-category-div">
      <p>Select what topics you want to focus on.</p>
    </div>
    <div>
      <CategorySelector />
    </div>
    <div v-if="startedQuiz" class="button-div">
      <button
        :class="[{ disabled: !selectedCategory }]"
        @click="startQuiz"
        type="button"
        class="btn btn-dark btn-lg"
      >Start Quiz</button>
    </div>
    <div v-else class="button-div">
      <button @click="continueQuiz" type="button" class="btn btn-dark btn-lg">Continue Quiz</button>
      <button
        @click="abondonQuiz"
        type="button"
        class="btn btn-dark btn-lg abandon-quiz--button"
      >Abondon Quiz</button>
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
    startedQuiz(): boolean {
      return this.$store.state.quiz == null;
    },
    selectedCategory(): boolean {
      return this.$store.state.chosenCategories.length > 0;
    },
  },
  methods: {
    startQuiz(): void {
      function shuffleArray(array: Question[]): void {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      if (this.selectedCategory) {
        const questions = this.$store.getters.getAllQuestions;

        shuffleArray(questions);
        const end =
          this.limit <= questions.length
            ? this.limit - 1
            : questions.length - 1;
        const sample = questions.slice(0, end);
        const quiz = new Quiz(sample, this.limit);
        this.$store.commit("setQuiz", quiz);
        this.$router.push("/quizInstance");
      }
    },
    continueQuiz(): void {
      this.$router.push("/quizInstance");
    },
    abondonQuiz(): void {
      this.$store.dispatch("onQuizCompleted");
    },
  },
});
</script>

<style scoped>
p {
  padding-left: 35px;
}

.button-div {
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
}
.abandon-quiz--button {
  margin-top: 20px;
}
</style>

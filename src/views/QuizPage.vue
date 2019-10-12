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
      <v-btn x-large class="quiz-start-button" @click="startQuiz">Start Quiz</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import CategorySelector from "../components/CategorySelector.vue";
import Vue, { VueConstructor } from "vue";
import { Quiz, Question } from "../types/storeTypes";
import Nav from "../components/Nav.vue";

export default Vue.extend({
  components: {
    CategorySelector,
    Nav,
  },
  computed: {
    limit() {
      return this.$store.state.limit;
    },
  },
  methods: {
    startQuiz() {
      let questions = this.$store.getters.getQuestions;
      function shuffleArray(array: Question[]) {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      shuffleArray(questions);
      let end =
        this.limit <= questions.length ? this.limit - 1 : questions.length - 1;
      let sample = questions.slice(0, end);
      let quiz = new Quiz(sample, this.limit);
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

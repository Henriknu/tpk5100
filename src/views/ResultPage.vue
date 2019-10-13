<template>
  <div class="container">
    <a @click="goToQuiz">
      <img src="../../public/img/icons8-go-back-96.png" alt="Go back" />
    </a>
    <h1>Results</h1>
    <p>
      You answered {{ correctQuestions }} out of {{ initialLength }} questions
      correctly.
    </p>
    <p v-if="precentage >= 0.5">Great Job!</p>
    <p v-else>Better Luck next time!</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      correctQuestions: this.$store.state.quiz!.correctQuestionsCounter,
      initialLength: this.$store.state.quiz!.initialLength,
    };
  },
  computed: {
    precentage(): number {
      return this.$data.correctQuestions / this.$data.initialLength;
    },
  },
  methods: {
    goToQuiz(): void {
      this.$router.push("/quiz");
    },
  },
});
</script>

<style scoped>
img {
  width: 35px;
  padding-bottom: 20px;
}
</style>

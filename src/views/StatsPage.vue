<template>
  <div class="container">
    <h1>Stats</h1>
    <p>These are your stats:</p>
    <p>Quizes completed: {{totalQuizes}}</p>
    <p>Total Questions: {{totalQuestions}}</p>
    <p>Correct Questions: {{correctQuestions}}</p>
    <p v-if="avgPercentage">Average precentage: {{avgPercentage}} %</p>
    <button>Reset stats</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    totalQuizes() {
      return this.$store.state.totalQuizzesCompleted;
    },
    totalQuestions() {
      return this.$store.state.totalQuestionsAnswered;
    },
    correctQuestions() {
      return this.$store.state.totalQuestionsCorrect;
    },
    avgPercentage() {
      return (
        (this.$store.state.sumOfPercentage /
          this.$store.state.totalQuizzesCompleted) *
        100
      ).toFixed(2);
    },
  },
});
</script>

<style scoped></style>

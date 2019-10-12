<template>
  <div class="container">
    <Nav header-text="Stats"></Nav>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quizes completed</td>
          <td>{{ totalQuizes }}</td>
        </tr>
        <tr>
          <td>Total questions answered</td>
          <td>{{ totalQuestions }}</td>
        </tr>
        <tr>
          <td>Total correct answers</td>
          <td>{{ correctQuestions }}</td>
        </tr>
        <tr v-if="!isNaN(avgPercentage)">
          <td>Average precentage</td>
          <td>{{ avgPercentage }}</td>
        </tr>
      </tbody>
    </table>
    <button>Reset stats</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "../components/Nav.vue";
export default Vue.extend({
  components: {
    Nav,
  },
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

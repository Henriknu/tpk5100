<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goToQuiz">
        <img src="../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <h1>Results</h1>
      <span></span>
    </div>
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
      correctQuestions: 0,
      initialLength: 0,
    };
  },
  created() {
    this.correctQuestions = this.$store.state.quiz!.correctQuestionsCounter;
    this.initialLength = this.$store.state.quiz!.initialLength;
    this.$store.dispatch("onQuizCompleted");
  },
  computed: {
    precentage(): number {
      return this.$data.correctQuestions / this.$data.initialLength;
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
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
.header--div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
}
h1 {
  padding-right: 35px;
}
a {
  padding-top: 8px;
}
</style>

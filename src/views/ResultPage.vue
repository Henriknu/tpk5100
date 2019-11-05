<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="redirectToQuiz ? goToQuiz : goToChapter(chapterNumber)">
        <img src="../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
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
      redirectToQuiz: true,
      chapterNumber: 0,
    };
  },
  computed: {
    precentage(): number {
      return this.$data.correctQuestions / this.$data.initialLength;
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
  },
  created() {
    this.correctQuestions = this.$store.state.quiz!.correctQuestionsCounter;
    this.initialLength = this.$store.state.quiz!.initialLength;
    this.redirectToQuiz = this.$store.state.quiz!.redirectToQuiz;
    if (this.$store.state.quiz!.chapterNumber)
      this.chapterNumber = this.$store.state.quiz!.chapterNumber;

    this.$store.dispatch("onQuizCompleted");
  },
  methods: {
    goToQuiz(): void {
      this.$router.push("/quiz");
    },
    goToChapter(chapterIndex: number): void {
      this.$router.push(`chapter${chapterIndex}`);
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
p {
  padding-top: 20px;
  padding-left: 35px;
  padding-right: 35px;
}
</style>

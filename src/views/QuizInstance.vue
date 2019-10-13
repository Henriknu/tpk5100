<template>
  <div class="container">
    <a @click="back">
      <img src="../../public/img/icons8-go-back-96.png" alt="Go back" />
    </a>
    <h4>Question {{ questionIndex }}: {{ activeQuestion.question }}</h4>
    <h4>Options:</h4>
    <div class="list--div">
      <ul class="list-group">
        <a
          v-for="(option, index) in activeQuestion.options"
          :key="option"
          :class="[
            { 'list-group-item-primary': optionSelected === option },
            {
              'list-group-item-success':
                answered && index === activeQuestion.answerIndex,
            },
            {
              'list-group-item-danger':
                answered &&
                index !== activeQuestion.answerIndex &&
                option === optionSelected,
            },
          ]"
          @click="select(option)"
          role="button"
          class="list-group-item list-group-item-action"
          >{{ index + 1 }} : {{ option }}</a
        >
      </ul>
    </div>
    <div class="button-div justify-space-between">
      <button
        id="verify-button"
        :class="[{ disabled: !selected || answered }]"
        @click="verify"
        type="button"
        class="btn btn-dark btn-lg"
      >
        Verify
      </button>

      <button
        :class="[{ disabled: !answered }]"
        @click="nextQuestion"
        type="button"
        class="btn btn-dark btn-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Question } from "../types/storeTypes";
export default Vue.extend({
  data() {
    return {
      activeQuestion: this.$store.getters.getQuestion(0) as Question,
      questionIndex: this.$store.state.quiz!.questionCounter,
      optionSelected: "",
      answered: false,
    };
  },
  computed: {
    selected(): boolean {
      return this.$data.optionSelected.length > 1;
    },
  },
  methods: {
    back(): void {
      this.$router.go(-1);
    },
    verify(): void {
      if (this.selected && !this.answered) {
        this.answered = true;
        //Give points / increment correct counter
        if (
          this.optionSelected ===
          this.activeQuestion.options[this.activeQuestion.answerIndex]
        ) {
          this.$store.commit("incrementCorrectQuestionCounter");
        }
      }
    },
    nextQuestion(): void {
      if (this.answered) {
        //if no more questions, go to result page. Else, launch next question.
        if (this.$store.state.quiz!.questions.length === 1) {
          //Update stats
          this.$store.dispatch("updateStats", {
            totalQuestions: this.$store.state.quiz!.initialLength,
            totalQuestionsCorrect: this.$store.state.quiz!
              .correctQuestionsCounter,
          });
          //route to result page
          this.$router.push("/result");
        } else {
          this.optionSelected = "";
          this.answered = false;
          this.$store.commit("removeQuestion", this.activeQuestion);
          this.$store.commit("incrementQuestionCounter");
          this.activeQuestion = this.$store.getters.getQuestion(0);
          this.questionIndex = this.$store.state.quiz!.questionCounter;
        }
      }
    },
    select(option: string): void {
      if (!this.answered) this.optionSelected = option;
    },
  },
});
</script>

<style scoped>
img {
  width: 35px;
  padding-bottom: 20px;
}
h4 {
  padding-bottom: 20px;
}
button {
  margin-top: 20px;
  margin: 24px;
}
.disabled {
  cursor: default;
}
.button-div {
  display: flex;
  justify-content: space-between;
}
</style>

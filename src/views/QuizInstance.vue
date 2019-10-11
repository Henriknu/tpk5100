<template>
  <div class="container">
    <button type="button" class="btn btn-dark" @click="back">Go back</button>
    <h4>Question {{ questionIndex }}: {{ activeQuestion.question }}</h4>
    <h4>Options:</h4>
    <div class="list--div">
      <ul class="list-group">
        <a
          v-for="(option, index) in activeQuestion.options"
          :key="option"
          role="button"
          class="list-group-item list-group-item-action"
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
          >{{ index + 1 }} : {{ option }}</a
        >
      </ul>
    </div>

    <a
      v-show="!answered"
      type="button"
      class="btn btn-dark"
      :class="[{ disabled: !selected }]"
      @click="verify"
      >Verify</a
    >
    <v-btn v-show="answered" @click="nextQuestion">Next</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Category, Question } from "../types/storeTypes";
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
    selected() {
      return this.$data.optionSelected.length > 1;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    verify() {
      this.answered = true;
      //Give points / increment correct counter
      if (
        this.optionSelected ===
        this.activeQuestion.options[this.activeQuestion.answerIndex]
      ) {
        this.$store.commit("incrementCorrectQuestionCounter");
      }
    },
    nextQuestion() {
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
    },
    select(option: string) {
      this.optionSelected = option;
    },
  },
});
</script>

<style scoped></style>

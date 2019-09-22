<template>
  <div class="container">
    <button type="button" class="btn btn-dark" @click="back">Go back</button>
    <h4>Question: {{activeQuestion.question}}</h4>
    <h4>Options:</h4>
    <div class="list--div">
      <ul class="list-group">
        <a
          role="button"
          class="list-group-item list-group-item-action"
          :class="{'list-group-item-primary': optionSelected === option}"
          v-for="(option, index) in activeQuestion.options"
          :key="option"
          @click="select(option)"
        >{{index + 1}} : {{option}}</a>
      </ul>
    </div>

    <a
      v-show="!answered"
      type="button"
      class="btn btn-dark"
      :class="[{'disabled':!selected}]"
      @click="verify"
    >Verify</a>
    <v-btn v-show="answered" @click="nextQuestion">Next</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Category } from "../types/storeTypes";
export default Vue.extend({
  data() {
    return {
      questions: this.$store.getters.getQuizQuestions,
      activeQuestion: this.$store.getters.getQuizQuestions[0],
      optionSelected: "",
      answered: false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    verify() {
      this.answered = !this.answered;
    },
    nextQuestion() {},
    select(option: string) {
      console.log(option);
      this.optionSelected = option;
    }
  },
  computed: {
    quizQuestions() {
      return this.$store.getters.getQuizQuestions;
    },
    selected() {
      return this.$data.optionSelected.length > 1;
    }
  },
  created() {
    console.log(this.$store.getters);
  }
});
</script>

<style scoped>
</style>
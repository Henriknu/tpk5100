<template>
  <div>
    <h1>Quiz</h1>
    <div class="p-category-div">
      <p>Select what topics you want to focus on:</p>
    </div>
    <CategorySelector />
    <div class="button-div">
      <v-btn x-large class="quiz-start-button" @click="startQuiz">Start Quiz</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import CategorySelector from "../components/CategorySelector.vue";
import Vue, { VueConstructor } from "vue";

interface VuexBindings {
  getQuestions: Function;
}

export default (Vue as VueConstructor<Vue & VuexBindings>).extend({
  components: {
    CategorySelector
  },
  methods: {
    ...mapGetters(["getQuestions"]),
    startQuiz() {
      let questions = this.getQuestions();
      console.log(questions);
      this.$router.push({
        name: "quiz instance",
        params: { incomingQuestions: questions }
      });
    }
  }
});
</script>

<style scoped>
h1 {
  display: flex;
  align-self: center;
  justify-content: center;
}

p {
  margin: 1.5rem;
}

.button-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
}

.quiz-start-button {
  align-self: flex-end;
  position: absolute;
  bottom: 15rem;
}
</style>

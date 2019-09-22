<template>
  <div>
    <v-btn @click="back">Go back</v-btn>
    <p>Hello Quizers</p>
    <p v-for="question in questions" :key="question.question">{{question.question}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      questions: null
    };
  },
  props: {
    incomingQuestions: Array
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    console.log(this.$props);
    this.questions = this.$props.incomingQuestions;
  }
});
</script>

<style scoped>
</style>
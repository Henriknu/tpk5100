<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 3</h1>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</b>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Stakeholder Involvement</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>The involvement of key stakeholders is crucial for a project’s success, and this makes stakeholder management important. Stakeholder management consists of three steps:</p>
            <ul>
              <li>Identification of stakeholders.</li>
              <li>Analysis of stakeholders and their relationship to the project.</li>
              <li>Implementation of strategies for communicating with each stakeholder based on the information from the above steps.</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Stakeholder mapping</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>A popular method used to position stakeholders relative to each other. The most common way is to create an influence-interest matrix and position and group the stakeholders according to their influence over and interest in the project. The stakeholders are divided into four groups:</p>
            <p>
              <b>High influence – high interest</b>.
              <br />Key stakeholders. Close collaboration, involvement and monitoring.
            </p>
            <p>
              <b>High influence – low interest</b>.
              <br />Prioritized group. Keep satisfied as their support might be important for the project at a later point.
            </p>
            <p>
              <b>Low influence – high interest</b>.
              <br />Prioritized group. Keep informed and make sure that their interests are fulfilled to a certain degree.
            </p>
            <p>
              <b>Low influence – low interest</b>.
              <br />Marginal effort. Monitor in case stakeholder(s) move to a different group.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="button-div">
      <button
        @click="startTermsQuiz"
        type="button"
        class="btn btn-dark btn-lg test-button"
      >Test terms</button>
      <button
        @click="startSummaryQuiz"
        type="button"
        class="btn btn-dark btn-lg test-button"
      >Test summary</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import shuffleArray from "../../service/shuffle-service";
import { Quiz } from "../../types/storeTypes";
export default Vue.extend({
  computed: {
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
    limit(): number {
      return this.$store.state.limit;
    },
  },
  methods: {
    goBack(): void {
      this.$router.push("/learnMore");
    },
    startTermsQuiz(): void {
      const questions = this.$store.getters.getTermsQuestions(3);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 3);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
    startSummaryQuiz(): void {
      const questions = this.$store.getters.getSummaryQuestions(3);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 3);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
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
  padding-top: 20px;
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
.button-div {
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
}
.test-button {
  margin: 10px;
}
.chapter-img {
  height: 100%;
  width: 100%;
}
</style>

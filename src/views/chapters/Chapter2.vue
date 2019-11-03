<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 2</h1>
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
          <h5>Organizational complexity</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Some projects are more structurally complex than others. A project’s organizational complexity is dependent on the number of individuals working on the project and the mixture of departments, geographical locations and respective work fields among them. It is also affected by the number of different stakeholders as well as whether the project workers are from inside the organization or hired externally and whether the project is delivered in one big or several smaller packages.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Transformational tools</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Projects are tools for transformation. The transformation can be finding new, more effective ways to do a task, slightly changing a product or service, or inventing something brand new.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Business and strategic perspectives</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Projects impact the business objectives and strategy. It is therefore important that the objectives of the project are aligned with those of the company. Projects are initiated to create benefit for the project owner, and the distribution of resources to a company’s projects will be decided by the size of this benefit.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Within limitations</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Projects have certain limitations that can’t be exceeded for the benefits to be fully realized. These can for example be limitations for time or resources spent.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Risk response</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Knowing the likelihood and consequences of the risk identified, the risk response planning process involves recognizing the necessary measures to manage the risks. The measures should fit the project characteristics, the risk situation and the risk implications for the project objective.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Uncertainty</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Every project has an associated uncertainty. The degree uncertainty is proportional with the degree of innovation required to finish the project. It is difficult to predict the development of and possible incidents influencing the project if the uncertainty is high.</p>
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
      this.$router.go(-1);
    },
    startTermsQuiz(): void {
      const questions = this.$store.getters.getTermsQuestions(2);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 2);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
    startSummaryQuiz(): void {
      const questions = this.$store.getters.getSummaryQuestions(2);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 2);
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

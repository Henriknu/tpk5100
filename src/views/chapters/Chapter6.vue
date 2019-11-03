<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 6</h1>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>Success factor</b>
            <p>A description of ground rules (activities or elements) that should be adhered to during project planning and execution in order to achieve a successful completion of the project.</p>

            <b>Project success criteria</b>
            <p>Measurable terms that describe what the acceptable outcome of the project are to the end user, customer, and the stakeholders.</p>
            <b>Project management success</b>
            <p>The degree to which the project has managed to satisfy various project and contextual constraints.</p>
            <b>Process success</b>
            <p>The degree to which the stakeholders (participants, line-managers, end-users, suppliers etc.) experience the project implementation phase as a success.</p>
            <b>Project success</b>
            <p>The ability of the project to create value, achieve the intended transformation and impact the business and/or strategy.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Research on success</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            The research on project success may be divided into three categories:
            <ul>
              <li>
                <b>Research on success criteria:</b>
                <br />How should success in various projects be defined and how should they be measured? Should it be based on an objective approach (measured against certain criteria determined at the beginning of the project) or should it be based on a subjective one where the different stakeholders may evaluate the success of the project differently.
              </li>
              <li>
                <b>Research on critical success factors:</b>
                <br />How does one achieve success in projects? What measures need to be in place?
              </li>
              <li>
                <b>Research on a linkage between success criteria and success factors</b>
              </li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Objective success criteria</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>The objective approach has been heavily criticized due to all the assumptions that are made in order to define the success criteria of a project.</p>
            <p>The assumptions made:</p>
            <ul>
              <li>Estimated time and cost of the project can be predicted in the beginning.</li>
              <li>The time in which the project can be classified as a success or a failure is immediately after the project has ended.</li>
              <li>The outcome of the project in terms of customer satisfaction etc. is often difficult to quantify or measure</li>
              <li>All stakeholders will have the perception of the project</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Generic success factors</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              <em>Pinto</em> developed a list of 10 generic success factors:
            </p>
            <ul>
              <li>Clarity of project purpose</li>
              <li>Support from top management</li>
              <li>Adequate project planning</li>
              <li>Client consultation</li>
              <li>People management</li>
              <li>Technology to support the project</li>
              <li>Approval by the client</li>
              <li>Project follow-up and feedback</li>
              <li>Effective communication</li>
              <li>Troubleshooting expertise</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Success factor categories</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              <em>Cooke-Davies</em> developed a model that describes how to achieve three different types of success in projects, hence establishing a linkage between a certain type of success and various success factors. He divided these into three different success factor categories:
            </p>
            <u>Project management success</u>
            <ul>
              <li>Effective project risk management process</li>
              <li>Clear roles and responsibilities / sufficient authority (organizational factors)</li>
              <li>Scheme for change / deviation control</li>
              <li>Scheme for performance measurement and reporting (for example: earned value)</li>
            </ul>
            <br />
            <u>Project success</u>
            <ul>
              <li>Close cooperation between users / owners and the conducting organization</li>
              <li>Involvement and effective communication</li>
            </ul>
            <br />
            <u>Long-term success (Business Success)</u>
            <ul>
              <li>Effective program and portfolio management (choice of projects)</li>
              <li>Indicators that links project success to corporate success</li>
              <li>Plan for learning and experience transfer</li>
            </ul>
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
      <button type="button" class="btn btn-dark btn-lg test-button">Test summary</button>
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
      const questions = this.$store.getters.getTermsQuestions(6);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 6);
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
</style>

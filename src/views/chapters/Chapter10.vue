<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 10</h1>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>Risk Management</b>
            <p>Identifying, analysing and managing risks throughout the project life cycle to achieve its goals.</p>
            <b>Risk Identification Process</b>
            <p>Identifying events or conditions that may occur during the project life cycle, and that could have an impact on at least one project objective.</p>
            <b>Risk Assessment Process</b>
            <p>Assessing the likelihood and magnitude of the consequences of the identified risks for a project’s objectives.</p>
            <b>Risk Response Planning Process</b>
            <p>Identifying measures that avoid, transfer or reduce risks that have a critical impact.</p>
            <b>Product-related Factors</b>
            <p>The risk factors that may arise in connection with the development or introduction of the product, service or results in operation.</p>
            <b>People-related Factors</b>
            <p>The risk factors that can be traced to persons involved in the project or the operation phase that can contribute to uncertainty, such as knowledge, attitude and motives.</p>
            <b>Organization-related factors</b>
            <p>The risk factors that can be related to the organizational conditions, such as organizational structure or work culture.</p>
            <b>Context-related factors</b>
            <p>The risk factors that are outside the project’s control, such as weather and market conditions.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Challenges and prerequisites</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Some challenges in the risk management process are subjective perceptions, simplified assumptions and one-sided focus on risk associated with implementation of the project rather than achieving change. Examples of important prerequisites for risk management are knowledge, skills in risk management, people, access to information about the status and aspects of the project and the necessary time to perform the risk management processes.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>The risk management processes</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>The risk management processes consist of risk identification, risk assessment, risk response planning and risk monitoring and control.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Risk identification</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>The risk identification process involves identifying factors or events that may influence one or several of the project’s objectives during the project life cycle. In this process, it is essential to include the project’s stakeholders. The different stakeholders may have conflicting interests. When being involved, the stakeholders may feel that their interests are taken into consideration. The stakeholders can provide valuable information that can build a broader understanding of the consequences or constraints in the project.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Risk assessment</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>After having identified the potential risks, the risk assessment process involves assessing the likelihood and the consequences of the events or factors identified in the risk assessment process in a risk impact matrix. The impact matrix consists of one column showing the probability of the factor or event occurring and the severity of the consequences associated with the risk in the other column.</p>
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
          <h5>Risk monitoring and control</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>The risk monitoring and control process monitors, evaluates and updates the overview of the risks and the adequate risk responses. A risk register may be needed to achieve a systematic approach to this process. The register should contain a description of the risk, the severity of the risk, a measure, a responsible person for the measure and a status update.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Risk classification and types of measures</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>There are several types of risks; product-related factors, people-related factors, organization-related factors, context-related factors. Some product-related factors are infrastructure to support the new product and services and the properties, features or requirements to the product or service being developed. People-related factors involve the competence, skills, knowledge, motives, motivation and the availability of people in the project. The organizational-related factors illustrate the organizational complexity in projects, involving work culture, guidelines, conflict with other work tasks and the organizational structure. The context-related factors cover events and conditions that are outside of the project’s control, such as weather, economic risks and other external factors.</p>
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
      const questions = this.$store.getters.getTermsQuestions(10);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 10);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
    startSummaryQuiz(): void {
      const questions = this.$store.getters.getSummaryQuestions(10);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 10);
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

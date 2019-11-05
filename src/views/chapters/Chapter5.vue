<template>
  <div class="container">
    <div class="header--div">
      <a @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <h3>5. Project initiation</h3>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>Mandate</b>
            <p>A document describing the scope of the project</p>

            <b>Rationale</b>
            <p>
              An explanation of the reason the project is required in the particular area.
              <br />
              <br />There are four categories of rationales:
              <ul>
                  <li>Solve an existing problem (usually a sense of urgency to maintain viable operation)</li>
                  <li>Prevent a future problem (incl. assessment, maintenance, updates)</li>
                  <li>Achieve a business goal or a strategic goal</li>
                  <li>Seize an opportunity in a new technology or new market</li>
              </ul>
            </p>
            <b>Purpose</b>
            <p>
              A value-oriented formulation of what the project result is to be used for; main function. This is a desired future state, and the time aspect separates this term from the trigger.
            </p>
            <b>Trigger factor/stimuli</b>
            <p>
             Factual description of the current situation that triggered project initiation (starting point). The time aspect separates this term from the purpose.
            </p>
            <b>Outcome, objectives</b>
            <p>
             Intended benefits that could be realized if the project delivers a product that fulfills its purpose. Includes effects on business, organization, end users. There is high uncertainty related to fulfillment of the objectives.
            </p>
           <b> Deliverables, output, end goals</b>
           <p>Tangible descriptions of what the project should result in. Distinguish between tangible deliveries (Ex. components, products, systems, documents) and conceptual deliveries (Ex. working-processes, models, concepts).
</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Phase 1 of the project lifecycle: Initiation</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Phase 1 is called initiation and is the greatest opportunity to influence the project.</p>
            <p>Tasks:</p>
            <ul>
              <li>Define goals</li>
              <li>Identify stakeholders, as well as their expectations and contributions</li>
              <li>Create a common understanding and agreement of the project, its purpose and objectives</li>
              <li>Uncover ambiguities to reduce misunderstandings</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>The project mandate</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
           <p>The project mandate is a document describing the scope of the project. This is the basis for governance and control throughout the project’s lifetime.</p>
           <p>Minimum content:</p>
           <ul>
             <li>Trigger factor and rationale; the basis of the project</li>
             <li>Purpose</li>
             <li>Outcome/objectives</li>
             <li>Output/deliverables</li>
             <li>Stakeholder overview, including requirements and contributions</li>
             <li>Success factors</li>
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
      >
        Test terms
      </button>
      <button
        @click="startSummaryQuiz"
        type="button"
        class="btn btn-dark btn-lg test-button"
      >
        Test summary
      </button>
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
h3 {
  padding-right: 45px;
  padding-left: 10px;
  text-align: center;
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
.test-button{
  margin: 10px;
}
</style>

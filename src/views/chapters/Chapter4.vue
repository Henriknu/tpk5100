<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 4</h1>
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
            <p>Document describing the scope of the project</p>

            <b>Rationale</b>
            <p>
              An explanation of the reason the project is required in the particular area.
              <br />
              <br />There are four categories of rationales:
              <ul>
                  <li>Solve an existing problem (usually a sense of urgency to maintain viable operation)</li>
                  <li> Prevent a future problem (incl. assessment, maintenance, updates)</li>
                  <li> Achieve a business goal or a strategic goal</li>
                  <li>Seize an opportunity in a new technology or new market</li>
              </ul>
            </p>
            <b>Purpose</b>
            <p>
              A value oriented formulation of what the project result is to be used for; main function.
            </p>
            <b>Trigger factor</b>
            <p>
             Description of the current situation that triggered project initiation
             <br> <br>
            Difference between the two: the time aspect. <br>
            <b>Purpose</b> := desired future state <br>
            <b>Trigger factor</b> := factual description of the starting point
            </p>
            <b>Outcome, objectives</b>
            <p>
              Intended benefits that could be realized if the project delivers a product that fulfills its purpose. Includes effects on business, organization, end users. There is high uncertainty related to fulfillment of the objectives.
            </p>
           <b> Deliverables, output, end goals</b>
           <p>Tangible descriptions of what the project should result in.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>The purpose of defining a project lifecycle</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
           <b> For the project manager:</b> <br>
            Plan and manage.
           <ul>
             <li>to get an overview</li>
             <li>describe the required tasks for the project's execution</li>
             <li>understand the need for resources in the various phases</li>
             <li>consider when the various stakeholders should be involved</li>
           </ul>
           <b>For the project owner:</b> <br>
           	Control
             <ul>
             <li>fixing decision gates, where the following is done:</li>
             <ul>
               <li>assess status</li>
               <li>ensure follow-up</li>
               <li>reassess goals</li>
               <li>adjust ambitions</li>
               <li>terminate the project, postpone the project or allow progression to the next stage</li>
             </ul>
           </ul>     
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>The lifecycle</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              The project manager and project owner work with these four phases, but have to look at the project from a holistic perspective to secure the desired effects of the project after delivery.

            </p>
             <p>
               The project output will produce several outcomes. The task is to maximize the positive effects and minimize the negative effects of the project. Thus, the project manager and project owner strive for the best ‘total package’ of outcomes, even though no one has complete control of the contextual uncertainty.

             </p>
              <p>
                There are many examples of projects delivered according to specifications and QCT frameworks, but still produce undesirable effects on the environment, organization and users. Reverse cases are also found, where the execution of the project did not meet expectations but still gave positive effects.
  Note: delivering a project according to its specifications does not necessarily secure fulfillment of the desired effects!
              </p>
              <p><b>How to realize the desired benefits?</b>
              <ul>
                <li>Good project management and good follow-up facilitates this</li>
                <li>There is an element of uncertainty in contexts that are beyond the control of individuals, and thus always constitutes a risk</li>
                <li>Acknowledge that there is a wide range of perspectives and interests to consider</li>
                <li>the perspectives 🡪 assessment criteria for success or failure, as perceived by the various groups
perspectives 	   + 	contextual uncertainty 	   = 	project characteristics (Ch. 3)</li>

              </ul>
</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
       <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Perspectives</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <ul><li>Each stakeholder category ← → one perspective</li>
            <li>Project management as a field of study is to structure and organize the way projects are carried out in order to attend to all these perspectives
Key: acknowledge that the project lives on (through the effects) and has consequences for the owner, the organization, the end user and the environment</li></ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
     <div class="button-div">
      <button  type="button" class="btn btn-dark btn-lg test-button">Test terms</button>
      <button  type="button" class="btn btn-dark btn-lg test-button">Test summary</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
  },
  methods: {
    goBack(): void {
      this.$router.push("/learnMore");
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
.test-button{
  margin: 10px;
}
</style>

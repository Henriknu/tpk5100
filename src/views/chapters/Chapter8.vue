<template>
  <div class="container">
    <div class="header--div">
      <a v-if="isMobile" @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <span v-else></span>
      <h1>Chapter 8</h1>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>Silo-thinking</b>
            <p>Failure to understand the impact of the project on the whole organization (see and prioritize only its own needs).</p>

            <b>Functional structure</b>
            <p>An organization structure where people work in different departments based on professional specialities.</p>
            <b>Project structure</b>
            <p>An organizational structure where people are grouped together based on the project they are working on.</p>
            <b>Matrix structure</b>
            <p>A combination of functional and project structure, where employees work within their department and projects at the same time.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Project Organizations</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Organizations may be structured numerous ways dependent on available resources and the culture in the organization. Keywords when distinguishing the different structures are authority and coordination. From a project perspective, we choose to distinguish between three different organizational structures: Functional, Project and Matrix.</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Functional Structure</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Within a functional structure, people work in different departments based on professional specialities. The project is defined as business as usual; each department executes their project related tasks almost independently of the other departments. Department managers have the authority and all communication between the departments is done through them.</p>
            <p>Pros:</p>
            <ul>
              <li>Vertical communication</li>
              <li>In-depth learning is better</li>
              <li>Cost management</li>
            </ul>
            <p>Cons:</p>
            <ul>
              <li>Slower response time</li>
              <li>Silo mentality (only prioritizing your own needs)</li>
              <li>No person is directly responsible for the project.</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Project Structure</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>Within a project structure, Project managers have a high level of authority to manage and control resources needed for the project, as long as they are available from the parent organization. In this structure employees are assigned to projects by project managers and all forms of communication and coordination is done within the project team. Project task has none or almost no connection to regular department tasks.</p>
            <p>Pros:</p>
            <ul>
              <li>Project manager has complete control</li>
              <li>Fast and flexible response</li>
              <li>Loyalty to the project</li>
            </ul>
            <p>Cons:</p>
            <ul>
              <li>Not ideal transfer of knowledge and skills development between projects</li>
              <li>Employees may become less loyal to the parent organization.</li>
              <li>Members may be fired or quit after project</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Matrix Structure</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <img
              src="../../../public/img/chapter-images/CH8SummaryPic1.jpg"
              alt="Matrix structure"
              class="chapter-img"
            />
            <p>Within a matrix structure, employees work with several activities, either on projects or in their department based on demand. This is a form of mixture between functional and project structure. A significant feature is that projects are run by resources form different departments and coordination happens and project level. Matrix structure may be divided into weak, balanced and strong, whereas the difference is the authority of the line leaders.</p>
            <p>Pros:</p>
            <ul>
              <li>Suited to dynamic environments</li>
              <li>Coordination across functional units</li>
              <li>Maximize use of resources</li>
            </ul>
            <p>Cons:</p>
            <ul>
              <li>Double management (both functional and project)</li>
              <li>Conflicts between functional and project</li>
              <li>Lack of day-to-day authority on project resources</li>
              <li>Negotiation needed to share resources</li>
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
      const questions = this.$store.getters.getTermsQuestions(8);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 8);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
    startSummaryQuiz(): void {
      const questions = this.$store.getters.getSummaryQuestions(8);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 8);
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

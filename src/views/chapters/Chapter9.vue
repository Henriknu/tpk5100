<template>
  <div class="container">
    <div class="header--div">
      <a @click="goBack">
        <img src="../../../public/img/icons8-go-back-96.png" alt="Go back" />
      </a>
      <h3>9. Project planning</h3>
      <span></span>
    </div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Terms</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <b>Float</b>
            <p>
              How much time an activity time may be increased without affecting
              the project’s end date
            </p>
            <b>Critical path</b>
            <p>The path with the longest project duration.</p>
            <b>Work packages</b>
            <p>A mini-project with a defined result.</p>
            <b>Planned Value (PV)</b>
            <p>
              The cumulative time-phased budget in terms of hours or costs at a
              given status date.
            </p>
            <b>Actual Costs (AV)</b>
            <p>The cumulative incurred expenses or hours at a given status date.</p>
            <b>Earned Value (EV)</b>
            <p>
              The value of the work that has been accomplished by a given status
              date. The value is based on how much the work is worth in terms of
              hours or costs.
            </p>
            <b>Cost Performance Index (CPI)</b>
            <p>
              A measure to express the relation between earned value and actual
              costs, to indicate the cost performance at a given status date.
              CPI = EV/AC.
            </p>
            <b>Schedule Performance Index (SPI)</b>
            <p>
              A measure to express the relation between earned value and planned
              value, to indicate the current time performance at a given status
              date. SPI = EV/PV.
            </p>
            <b>Estimated Cost at Completion (EAC)</b>
            <p>
              A forecast of the total project costs based on the cost
              performance at a given status date, using planned value and the
              cost performance index (CPI). EAC = PV/CPI.
            </p>
            <b>Time Forecasting (ED)</b>
            <p>
              The expected duration of a project based on the schedule
              performance at a given status date, using planned duration (D) and
              the schedule performance index (SPI). ED = D/SPI.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Project planning</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              Project planning includes all tasks and activities that
              illustrate, describe and document how the projects’ results should
              be formed and delivered. A project plan should be based on the
              initiating phase (see chapter 5). The purpose of the plan is to
              document and display an appropriate course of action for the
              project.
            </p>
            <p>Premises for a good project plan are:</p>
            <ul>
              <li>Systematic and structured processes</li>
              <li>Flexibility to handle unique tasks and challenges</li>
              <li>Discipline, including revision and evaluation</li>
              <li>
                Project planning should be an iterative process because of
                uncertainties during the project
              </li>
            </ul>
            <p>
              The Project plans should be explicit and demonstrate how each
              project member should contribute towards the project goal. To make
              it easier, we use tools to visualize how the plan is going to help
              us reach the goal. Such Tools are milestone planning, work
              breakdown structure, network scheduling, resource loading chart
              and S-curve.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Milestone Planning</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              Milestone planning is a tool used to describe sequence of
              important events in the project process. Milestone planning is
              result oriented, not activity orientated as it describes what will
              be done, not how. Events included in this plan is for instance end
              date of the project, delivery dates, completion of prototype and
              when contracts are signed.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Work breakdown structure (WBS)</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <img
              src="../../../public/img/chapter-images/CH9SummaryPic1.png"
              alt="Matrix structure"
              class="chapter-img"
            />
            <p>
              Work Breakdown structure is a breakdown of the project into
              sub-deliveries and work packages, Illustrated below. The lowest
              level In the WBS are the work packages, each having a deliverable
              result, i.e. brainstorming or interviewing staff. The work
              packages should be independent, or almost completely independent
              from each other. It could include several milestones and should
              fit organizational procedures and culture. The size of each work
              package should be small enough to not expose the work package for
              too much risk, but not so small that the project is experiencing
              excessive control costs. The work breakdown structure should not
              include the sequence of the work packages.
            </p>
            <p>Some benefits of WBS are:</p>
            <ul>
              <li>Help to visualize the work</li>
              <li>
                Reduces complexity of the project by breaking it down to
                manageable tasks
              </li>
              <li>Letting stakeholders know what you are doing</li>
              <li>Easier to justify cost estimates</li>
              <li>Baseline for measuring the progress, cost and time estimates</li>
              <li>
                Makes it easier to understand the content of the project as
                early as possible
              </li>
              <li>Separate between in-house and supplier work</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Network Scheduling</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <img
              src="../../../public/img/chapter-images/CH9SummaryPic2.jpg"
              alt="Matrix structure"
              class="chapter-img"
            />
            <p>
              Network scheduling is a schematic illustration of the activities
              in the project and the dependency between them. An activity is
              represented by a node and the relation between the activities are
              made by lines. Such network is called an AON network (activity of
              node). It is used to scheduling of activities and estimate project
              duration. The different types of dependencies are illustrated
              below. FS means that work package A has to be finished before work
              package B may be started, FF means they have to finish at the same
              time and so on.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Network Analysis</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <img
              src="../../../public/img/chapter-images/CH9SummaryPic3.jpg"
              alt="Matrix structure"
              class="chapter-img"
            />
            <p>
              An analysis of an AON-network may be conducted, given that the
              duration of the activities are known. This analysis will help us
              determine:
            </p>
            <ul>
              <li>Time of project completion</li>
              <li>Which activities affects the projects end date</li>
              <li>
                Float (how much the activity duration may be increased without
                affecting the project) for each activity
              </li>
            </ul>
            <p>
              An algorithm known as “Critical path method” is used to figure out
              the information above. Critical path is the path with the longest
              duration is calculated as such:
            </p>
            <ul>
              <li>Each activity is made into a diagram, as shown in the figure</li>
              <li>
                Early start is 0 for the first activity and the same as biggest
                early finish (EF) of the preceding activities to the current
                activity
              </li>
              <li>EF for an activity is ES + Time(T)</li>
              <li>
                Late finish(LF) for the last is the same as its EF, while it is
                the lowest late start(LS) of its preceding activities
              </li>
              <li>LS for an activity is LF - T</li>
              <li>Float = LF - EF = LS - ES</li>
            </ul>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Resource Loading Chart</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <img
              src="../../../public/img/chapter-images/CH9SummaryPic4.jpg"
              alt="Matrix structure"
              class="chapter-img"
            />
            <p>
              Resource loading chart is a tool that visualizes the resource
              needs of the project over time. This tool is useful to allocate
              scarce resources. It may be used to conduct changes in the project
              plan if we have to postpone an activity as we have overloaded a
              resource at a certain time.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>S-Curve</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>
              Estimating project costs is complex, thus often not completely
              aligned with the true costs. By calculating estimated accumulated
              cost or work hours after each month and comparing with the actual
              costs/ work hours of the project, we get an indication whether the
              project is close to the estimates or if we are way off. The
              accumulated cost graph is known as the S-curve. The biggest issue
              concerning using the S-curve to indicate how the project is going
              is that it does not show what the actual costs consists of, only
              the total amount.
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h5>Performance assessment</h5>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <p>To assess the performance of a project, it is not enough to only compare the status with the project schedule or the incurred expenses with the budget. One need parameters to evaluate the value of the work that has been accomplished and its relation to the incurred costs.</p>
            <p>The correct assessment of the project status is comparing the value of the work that has been accomplished with the planned value of the work and the incurred expenses at a given status date. This yields the parameters Earned Value, Planned Value and Actual Costs.</p>
            <p>Earned value is the value of the work that has been accomplished by a given status date. The value is based on how much the work is worth in terms of hours or costs. Planned Value is the cumulative time-phased budget in terms of hours or costs at a given status date. Actual Costs refers to the cumulative incurred expenses or hours at a given status date.</p>
            <p>Comparing these parameters gives a Cost Performance Index (CPI) which is defined as Earned Value divided on Actual Costs. Moreover, Schedule Performance Index (SPI) is defined as Earned Value divided on Planned Value. Naturally, the CPI tells whether the project is over, on or under budget, and the SPI tells whether the project is ahead, on or behind its schedule.</p>
            <p>
              Based on the parameters, it is also possible to estimate the total costs and duration of the project. Estimated Costs at Completion (EAC) is defined as Planned Value divided on CPI.
              Furthermore, Expected Duration (ED) is defined as Planned Duration (D) divided on SPI.
            </p>
            <p>The project performance may also be visualised by drawing a graph for planned value, earned value and actual costs in a chart. The graphs will illustrate if the project is behind it schedule if the graph for Earned Value is under the graph for Planned Value. Also, one may identify poor cost performance if the graph for Planned Value lies below the graph for Actual Costs. The curves are referred to as the project S-curve.</p>
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
      const questions = this.$store.getters.getTermsQuestions(9);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 9);
      this.$store.commit("setQuiz", quiz);
      this.$router.push("/quizInstance");
    },
    startSummaryQuiz(): void {
      const questions = this.$store.getters.getSummaryQuestions(9);
      shuffleArray(questions);
      const quiz = new Quiz(questions, this.limit, false, 9);
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
.test-button {
  margin: 10px;
}
.chapter-img {
  height: 100%;
  width: 100%;
}
</style>

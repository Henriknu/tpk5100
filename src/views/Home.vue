<template>
  <div class="container">
    <Nav header-text="Projectify"></Nav>
    <p>
      This is an educational app made for the NTNU course TPK5100, by group 19.
    </p>
    <p>
      <b>Learn more</b> about project management and test yourself in the
      subject
    </p>
    <p>
      <b>Quiz</b> allows you to test yourself in multiple chapters at the same
      time.
    </p>
    <p>
      Track your
      <b>Stats</b> and compare your progress with your co-students.
    </p>
    <p>Good luck practicing!</p>
  </div>
</template>

<script lang="ts">
import Nav from "../components/Nav.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Nav,
  },
});
</script>

<style scoped>
p {
  padding-top: 20px;
  padding-left: 35px;
  padding-right: 35px;
}
</style>

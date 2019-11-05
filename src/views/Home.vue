<template>
  <div class="container">
    <div class="background-image"></div>
    <Nav header-text="Projectify"></Nav>
    <div class="container-text">
      <p>This is an educational app made for the NTNU course TPK5100, by group 19.</p>
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
.container {
  height: 100%;
}
.background-image {
  background-image: url("../../public/img/Background.png");
  background-position: center;
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  height: 200px;
  width: 200px;
}
p {
  padding-top: 20px;
  padding-left: 35px;
  padding-right: 35px;
}
</style>

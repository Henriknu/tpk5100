<template>
  <div class="container">
    <Nav header-text="Projectify"></Nav>
    <p>This is an educational app made for the NTNU course TPK5100.</p>
    <p>
      It allows you to practice your project management knowledge, by doing
      quizes.
    </p>
    <p>
      Choose what topics you want to focus on, and you will get asked 10 random
      questions related to topics.
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
}
</style>

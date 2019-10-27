<template>
  <div class="container">
    <Nav header-text="Learn more"></Nav>
    <div class="button-div">
      <button @click="goToChapter(4)" type="button" class="btn btn-dark btn-lg">Chapter 4</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "../components/Nav.vue";

export default Vue.extend({
  components: {
    Nav,
  },
  methods: {
    goToChapter(chapterIndex: number): void {
      this.$router.push(`chapter${chapterIndex}`);
    },
  },
});
</script>

<style scoped>
p {
  padding-left: 35px;
}
.button-div {
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
}
</style>

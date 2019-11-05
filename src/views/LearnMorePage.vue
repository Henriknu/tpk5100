<template>
  <div class="container">
    <Nav header-text="Learn more"></Nav>
    <div class="button-div">
      <div class="button-row">
        <button @click="goToChapter(2)" type="button" class="btn btn-dark btn-lg">Chapter 2</button>
        <button @click="goToChapter(3)" type="button" class="btn btn-dark btn-lg">Chapter 3</button>
      </div>
      <div class="button-row">
        <button @click="goToChapter(4)" type="button" class="btn btn-dark btn-lg">Chapter 4</button>
        <button @click="goToChapter(5)" type="button" class="btn btn-dark btn-lg">Chapter 5</button>
      </div>
      <div class="button-row">
        <button @click="goToChapter(6)" type="button" class="btn btn-dark btn-lg">Chapter 6</button>
        <button @click="goToChapter(7)" type="button" class="btn btn-dark btn-lg">Chapter 7</button>
      </div>
      <div class="button-row">
        <button @click="goToChapter(8)" type="button" class="btn btn-dark btn-lg">Chapter 8</button>
        <button @click="goToChapter(9)" type="button" class="btn btn-dark btn-lg">Chapter 9</button>
      </div>
      <div class="button-row">
        <button @click="goToChapter(10)" type="button" class="btn btn-dark btn-lg">Chapter 10</button>
      </div>
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

<style lang="scss" scoped>
p {
  padding-left: 35px;
}
button {
  margin: 10px;
}
.button-div {
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
}
.button-row {
  display: flex;
  flex-direction: row;
}
</style>

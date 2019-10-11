<template>
  <div class="container">
    <div class="row">
      <span></span>
      <h1>{{ headerText }}</h1>
      <v-btn router icon to="/settings">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    headerText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>

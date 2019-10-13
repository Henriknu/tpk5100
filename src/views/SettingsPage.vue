<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Settings</h1>
        <label>Maximum number of questions asked pr Quiz</label>
        <v-select :items="items" outlined placeholder="Limit"></v-select>
        <v-btn>Save Settings</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      items: [10, 15, 20, 30],
    };
  },

  computed: {
    limit(): number {
      return this.$store.state.limit;
    },
  },
});
</script>

<style scoped></style>

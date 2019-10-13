<template>
  <div class="container">
    <div class="row">
      <span></span>
      <h1>{{ headerText }}</h1>
      <v-btn v-if="isMobile" router icon to="/settings">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <span v-else></span>
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
  computed: {
    isMobile(): boolean {
      return this.$store.state.isMobile;
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

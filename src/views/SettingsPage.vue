<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="header--div">
          <a v-if="isMobile" @click="back">
            <img src="../../public/img/icons8-go-back-96.png" alt="Go back" />
          </a>
          <h1>Settings</h1>
          <span></span>
        </div>
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
  methods: {
    back(): void {
      this.$router.go(-1);
    },
  },
  computed: {
    limit(): number {
      return this.$store.state.limit;
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
}
h1 {
  padding-right: 35px;
}
.container {
  padding-left: 45px;
  padding-right: 45px;
}
</style>

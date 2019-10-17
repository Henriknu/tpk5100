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
        <v-select
          v-model="value"
          :items="items"
          outlined
          :placeholder="String(limit)"
          @change="updateInputLimit(value)"
        ></v-select>
        <button @click="saveSettings" type="button" class="btn btn-dark btn-lg">Save Settings</button>
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
      inputLimit: "",
    };
  },
  computed: {
    limit(): number {
      return this.$store.state.limit;
    },
    isMobile(): boolean {
      return this.$store.state.isMobile;
    },
  },
  methods: {
    back(): void {
      this.$router.go(-1);
    },
    saveSettings(): void {
      this.$store.dispatch("updateSettings", { limit: this.inputLimit });
    },
    updateInputLimit(value: string): void {
      this.inputLimit = value;
      console.log(value);
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
a {
  padding-top: 8px;
}
</style>

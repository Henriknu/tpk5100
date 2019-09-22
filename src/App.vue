<template>
  <v-app>
    <v-app-bar v-if="!isMobile" clipped-left app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">Projectify</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-if="!isMobile" v-model="drawer" temporary app>
      <v-list>
        <v-list-item-title class="title">Application</v-list-item-title>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          @click="drawer = false"
        >
          <v-list-item-content>
            <v-list-item-subtitle>{{link.text}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation v-if="isMobile" fixed>
      <v-btn value="home" to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn value="quiz" to="/quiz">
        <span>Quiz</span>
        <v-icon>mdi-comment-question-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    isMobile: false,
    links: [{ text: "Home", route: "/" }, { text: "Quiz", route: "/quiz" }]
  }),
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize);
    }
  },

  created() {
    console.log("Initating categories");
    this.$store.dispatch("initiateCategories");
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  }
});
</script>

<style>
</style>
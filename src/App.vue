<template>
  <v-app>
    <v-app-bar v-if="!isMobile" clipped-left app>
      <v-toolbar-items>
        <v-btn class="headline text-uppercase" text @click="goToPage('/')">Projectify</v-btn>
        <v-btn text @click="goToPage('/quiz')">Quiz</v-btn>
        <v-btn text @click="goToPage('/stats')">Stats</v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="goToPage('/settings')" class="settings">Settings</v-btn>
      </v-toolbar-items>
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
            <v-list-item-subtitle>{{ link.text }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation v-if="isMobile" fixed>
      <v-btn value="home" @click="goToPage('/')">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn value="quiz" @click="goToPage('/quiz')">
        <span>Quiz</span>
        <v-icon>mdi-comment-question-outline</v-icon>
      </v-btn>
      <v-btn value="stats" @click="goToPage('/stats')">
        <span class="no-after">Stats</span>
        <v-icon>mdi-chart-line</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-content>
      <div class="content-div">
        <router-view></router-view>
      </div>
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
    links: [
      { text: "Home", route: "/" },
      { text: "Quiz", route: "/quiz" },
      { text: "Stats", route: "/stats" },
    ],
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
    },
    goToPage(path: string) {
      if (this.$router.currentRoute.path !== path) this.$router.push(path);
    },
  },
});
</script>

<style>
.settings {
  margin-left: auto;
}
.content-div {
  margin: auto;
}
@media only screen and (min-width: 960px) {
  .content-div {
    max-width: 800px;
  }
}
</style>

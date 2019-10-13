/* eslint-disable @typescript-eslint/unbound-method */
<template>
  <v-app>
    <v-app-bar v-if="false"></v-app-bar>

    <nav v-if="!isMobile" class="navbar custom-container navbar-expand-sm navbar-light bg-light">
      <a @click="goToPage('/')" class="navbar-brand mb-0 h1">Projectify</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            :class="{ active: this.$router.currentRoute.name === 'home' }"
            @click="goToPage('/')"
            class="nav-link"
          >Home</a>
        </li>
        <li class="nav-item">
          <a
            :class="{ active: this.$router.currentRoute.name === 'quiz' }"
            @click="goToPage('/quiz')"
            class="nav-link"
          >Quiz</a>
        </li>
        <li class="nav-item">
          <a
            :class="{ active: this.$router.currentRoute.name === 'stats' }"
            @click="goToPage('/stats')"
            class="nav-link"
          >Stats</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            :class="{ active: this.$router.currentRoute.name === 'settings' }"
            @click="goToPage('/settings')"
            class="nav-link"
          >Settings</a>
        </li>
      </ul>
    </nav>

    <v-bottom-navigation v-if="isMobile" fixed>
      <v-btn @click="goToPage('/')" value="home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="goToPage('/quiz')" value="quiz">
        <span>Quiz</span>
        <v-icon>mdi-comment-question-outline</v-icon>
      </v-btn>
      <v-btn @click="goToPage('/stats')" value="stats">
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
    links: [
      { text: "Home", route: "/" },
      { text: "Quiz", route: "/quiz" },
      { text: "Stats", route: "/stats" },
    ],
  }),

  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },

  created() {
    console.log("Initating categories");
    this.$store.dispatch("initiateCategories");
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize);
    }
  },

  methods: {
    onResize() {
      this.$store.commit("setIsMobile", window.innerWidth < 600);
    },
    goToPage(path: string) {
      if (this.$router.currentRoute.path !== path) this.$router.push(path);
    },
  },
});
</script>

<style>
.content-div {
  margin: auto;
}
.custom-container {
  margin: auto;
  width: 480px;
}
ul {
  padding-right: 24px;
}

/*Ipad */

@media only screen and (min-width: 768px) {
  .custom-container {
    width: 650px;
  }
}
@media only screen and (min-width: 860px) {
  .custom-container {
    width: 650px;
  }
}

@media only screen and (min-width: 960px) {
  .content-div {
    max-width: 800px;
  }
  .custom-container {
    width: 750px;
  }
}
</style>

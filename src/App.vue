<template>
  <v-app>
    <v-app-bar v-if="false"></v-app-bar>

    <nav v-if="!isMobile" class="navbar custom-container navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand mb-0 h1" @click="goToPage('/')">Projectify</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: this.$router.currentRoute.name === 'home' }"
            @click="goToPage('/')"
          >Home</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: this.$router.currentRoute.name === 'quiz' }"
            @click="goToPage('/quiz')"
          >Quiz</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: this.$router.currentRoute.name === 'stats' }"
            @click="goToPage('/stats')"
          >Stats</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: this.$router.currentRoute.name === 'settings' }"
            @click="goToPage('/settings')"
          >Settings</a>
        </li>
      </ul>
    </nav>

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

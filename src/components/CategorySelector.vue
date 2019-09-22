<template>
  <v-app>
    <p>Number of topics selected: {{this.$store.state.chosenCategories.length}}</p>
    <v-card>
      <v-list>
        <v-list-item-group multiple color="green">
          <v-list-item v-for="cat in categories" :key="cat.name" @click="toggle(cat)">
            <v-list-item-content>
              <v-list-item-title v-text="cat.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import Component from "vue-class-component";
import Vue, { VueConstructor } from "vue";
import { Category } from "../types/storeTypes";

interface VuexBindings {
  updateChosenCategories: Function;
}

export default (Vue as VueConstructor<Vue & VuexBindings>).extend({
  name: "categories",
  data() {
    return {
      categories: this.$store.state.categories
    };
  },
  methods: {
    ...mapMutations(["updateChosenCategories"]),
    toggle(category: Category) {
      this.updateChosenCategories(category);
    }
  }
});
</script>

<style scoped>
.v-list {
  height: 20rem;
  overflow-y: auto;
}
</style>
<template>
  <div>
    <p>
      Number of topics selected: {{ this.$store.state.chosenCategories.length }}
    </p>
    <div class="list--div">
      <ul class="list-group">
        <a
          v-for="cat in categories"
          :key="cat.name"
          role="button"
          class="list-group-item list-group-item-action"
          :class="{
            'list-group-item-success': chosenCategories.some(
              category => category.name === cat.name
            ),
          }"
          @click="toggle(cat)"
          >{{ cat.name }}</a
        >
      </ul>
    </div>
  </div>
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
  name: "Categories",
  data() {
    return {
      categories: this.$store.state.categories,
    };
  },
  methods: {
    ...mapMutations(["updateChosenCategories"]),
    toggle(category: Category) {
      this.updateChosenCategories(category);
    },
  },
  computed: {
    chosenCategories() {
      return this.$store.state.chosenCategories;
    },
  },
});
</script>

<style scoped>
.list--div {
  height: 20rem;
  overflow-y: auto;
}
.list-group-item.active {
  background-color: #c3e6cb;
}
</style>

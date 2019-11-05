<template>
  <div class="col">
    <p>
      Number of topics selected: {{ this.$store.state.chosenCategories.length }}
    </p>
    <div class="list--div">
      <ul class="custom--ul list-group">
        <a
          v-for="cat in categories"
          :key="cat.name"
          :class="{
            'list-group-item-success': chosenCategories.some(
              category => category.name === cat.name
            ),
          }"
          @click="toggle(cat)"
          role="button"
          class="list-group-item list-group-item-action"
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
  computed: {
    chosenCategories() {
      return this.$store.state.chosenCategories;
    },
  },
  methods: {
    ...mapMutations(["updateChosenCategories"]),
    toggle(category: Category): void {
      if (this.$store.state.quiz == null) {
        this.updateChosenCategories(category);
      }
    },
  },
});
</script>

<style scoped>
.list--div {
  height: 35vh;
  overflow-y: auto;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .list--div {
    height: 50vh;
    overflow-y: auto;
  }
}

@media only screen and (min-width: 960px) {
  .list--div {
    height: 50vh;
    overflow-y: auto;
  }
}

.list-group-item.active {
  background-color: #c3e6cb;
}
p {
  padding-left: 24px;
}
.col {
  padding-top: 0px;
}
</style>

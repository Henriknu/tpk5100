<template>
  <div class="col">
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
  height: 35vh;
  overflow-y: auto;
}

.col {
  margin: auto;
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .list--div {
    height: 50vh;
    overflow-y: auto;
  }
  .col {
    max-width: 500px;
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
  text-align: start;
  padding-left: 24px;
}
</style>

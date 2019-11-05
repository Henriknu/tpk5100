<template>
  <div class="col">
    <div class="list--div">
      <div class="button-div">
        <button
          type="button"
          class="btn btn-dark btn-md"
          @click="multiToggle"
          :class="[{ disabled: startedQuiz }]"
        >{{multiSelect ? 'Unselect all categories' : 'Select all categories'}}</button>
      </div>
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
        >{{ cat.name }}</a>
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
    multiSelect() {
      return this.$store.state.multiSelect;
    },
    startedQuiz(): boolean {
      return this.$store.state.quiz != null;
    },
  },
  methods: {
    ...mapMutations(["updateChosenCategories"]),
    toggle(category: Category): void {
      if (this.$store.state.quiz == null) {
        this.updateChosenCategories(category);
      }
    },
    multiToggle(): void {
      if (!this.startedQuiz) {
        if (this.multiSelect) {
          this.$store.commit("setChosenCategories", []);
        } else {
          this.$store.commit(
            "setChosenCategories",
            this.$store.state.categories
          );
        }
        this.$store.commit("setMultiSelect", !this.multiSelect);
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

.button-div {
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  padding-left: 25px;
  align-items: flex-start;
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

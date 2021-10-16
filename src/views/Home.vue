<template>
  <div class="page">
    <div class="title">
      <h1>Welcome {{ name }}, to Oh My Food!</h1>
      <span class="mt-2"> To start searching to recipes use the field below! </span>
    </div>
    <div class="searchBox">
      <v-text-field v-model="inputValue" :label="filterType" :loading="randomLoad" />
      <v-btn color="primary" @click="handleSearch"> Search </v-btn>
      <v-btn color="primary" @click="handleRandom"> Pick for Me! </v-btn>

      <div>
        <food-table :foods="meal" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FoodTable from './FoodTable/FoodData.vue';

export default {
  components: {
    FoodTable,
  },

  data() {
    return {
      name: 'David',
      filterType: 'Recipes',
      meal: null,
      randomLoad: false,
      inputValue: '',
    };
  },

  methods: {
    ...mapActions({
      getRandom: 'search/randomFood',
      searchIngredient: 'search/searchByIngredient',
    }),
    async handleRandom() {
      this.randomLoad = true;
      const res = await this.getRandom();
      if (res) {
        this.meal = res.data.meals;
      }
      this.randomLoad = false;
    },
    async handleSearch() {
      const res = await this.searchIngredient(this.inputValue);
      if (res) {
        this.meal = res.data.meals;
      }
    },
  },
};
</script>

<style lang="scss">
.page {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  display: flex;
  width: 100%;
  margin-top: 4em;
  flex-wrap: wrap;
  justify-content: center;
}
.title h1 {
  width: 100%;
  text-align: center;
}
.searchBox {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  width: 60%;
  margin-top: 2em;
}
.searchBox input {
  width: 70%;
}
.searchBox button {
  margin-right: 1em;
}

.v-input {
  margin-right: 2em;
}
</style>

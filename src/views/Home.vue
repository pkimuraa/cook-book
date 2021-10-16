<template>
  <div class="d-flex flex-wrap justify-center" fullscreen>
    <div class="title">
      <h1>Welcome to Oh My Food, {{ name }}</h1>
      <span class="text-center mt-2"> To start searching to recipes use the field below! </span>
    </div>
    <div class="searchBox d-flex flex-wrap justify-center overflow-x-hidden">
      <v-text-field v-model="inputValue" fluid :width="width" :label="filterType" :loading="randomLoad" />
      <div class="actions d-flex flex-wrap justify-center" :style="actionWidth">
        <v-btn color="primary" class="mt-2" @click="handleSearch"> Search </v-btn>
        <v-btn color="primary" class="mt-2" @click="handleRandom"> Pick for Me! </v-btn>
        <v-btn color="primary" class="mt-2" @click="handleFavorite"> Favorites </v-btn>
      </div>
      <div :style="widthTable">
        <food-table :foods="meal" :key="reload" />
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
      reload: 0,
      name: 'David',
      filterType: 'Recipes',
      meal: null,
      randomLoad: false,
      inputValue: '',
      breakpoint: this.$vuetify.breakpoint.name,
      favorites: this.$store.state.search.favorites,
    };
  },

  computed: {
    width() {
      switch (this.breakpoint) {
        case 'xs':
          return '80%';
        case 'lg':
          return '60%';
        case 'xl':
          return '60%';
        default:
          return '60%';
      }
    },
    widthTable() {
      switch (this.breakpoint) {
        case 'xs':
          return 'width: 100%';
        default:
          return 'width: 80%';
      }
    },
    actionWidth() {
      switch (this.breakpoint) {
        case 'xs':
          return 'width: 100%';
        default:
          return 'width: 80%';
      }
    },
  },

  methods: {
    ...mapActions({
      getRandom: 'search/randomFood',
      searchIngredient: 'search/searchByIngredient',
    }),
    async handleRandom() {
      (this.isFavorites = false), (this.randomLoad = true);
      const res = await this.getRandom();
      if (res) {
        this.meal = res.data.meals;
      }
      this.randomLoad = false;
    },
    async handleFavorite() {
      this.randomLoad = true;
      this.meal = this.favorites;
      this.reload += 1;
      this.randomLoad = false;
    },
    async handleSearch() {
      this.randomLoad = true;
      this.isFavorites = false;
      const res = await this.searchIngredient(this.inputValue);
      if (res) {
        this.meal = res.data.meals;
      }
      this.randomLoad = false;
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
  width: 100%;
}
.searchBox button {
  margin-right: 1em;
}

.v-input {
  width: 100%;
  margin-right: 2em;
  margin-left: 2em;
}
</style>

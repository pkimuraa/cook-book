<template>
  <div class="page">
    <div class="title">
      <h1>Welcome {{ name }}, to Oh My Food!</h1>
      <span> To start searching to recipes use the field below! </span>
    </div>
    <div class="searchBox">
      <v-text-field :label="filterType" />
      <v-btn color="primary"> Search </v-btn>
      <v-btn color="primary" @click="handleRandom"> Pick for Me! </v-btn>
      <div class="filterBox">
        <v-radio v-model="filterType" label="Recipes" value="Recipes" />
        <v-radio v-model="filterType" label="Ingredients" value="Ingredients" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: 'David',
      filterType: 'Recipes',
    };
  },
  methods: {
    ...mapActions({
      getRandom: 'search/randomFood',
    }),
    async handleRandom() {
      const res = await this.getRandom();
      console.log(res);
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
.filterBox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.v-input {
  margin-right: 2em;
}
</style>

<template>
  <div fluid class="d-flex flex-wrap justify-space-between">
    <v-card v-for="n in 3" :key="n" class="mt-4 mr-4 mb-8" width="30%">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="250" :src="food.strMealThumb"></v-img>

      <v-card-title>{{ food.strMeal }}</v-card-title>

      <v-card-text>
        <div class="text-subtitle-1">Typical Region: {{ food.strArea }}</div>

        <div class="my-2 text-subtitle-1">Category: {{ food.strCategory }}</div>

        <!--<div max-heigth="200">{{ food.strInstructions }}</div> -->
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card flat class="px-4 mt-4">
            {{ text }}
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-card-title v-if="food.strTags">Tags</v-card-title>

      <v-card-text v-if="food.strTags">
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip>{{ food.strTags }}</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn color="red" text @click="Favorite"> Favorite </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FoodTable',
  props: {
    food: {
      type: Object,
      defatul: null,
    },
  },
  data() {
    return {
      tab: null,
      items: ['Ingredients', 'Preparation'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    };
  },
};
</script>

<style lang="scss">
.card {
  width: 60%;
  border-radius: 5px;
  max-height: 500px;
}
</style>

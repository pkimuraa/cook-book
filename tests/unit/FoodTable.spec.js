// Libs
import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
//Component
import FoodData from '@/views/FoodTable/FoodData.vue';

import { createLocalVue, mount } from '@vue/test-utils';

describe('FoodData.vue', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should match snapshot', () => {
    const wrapper = shallowMount(FoodData, {
      localVue,
      vuetify,
      mocks: {
        $vuetify: { breakpoint: {} },
        $store: {
          state: {
            search: {
              favorites: {},
            },
          },
        },
      },
      propsData: {
        foods: [
          {
            srtMeal: 'French Fries',
            srtMealThumb: 'https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg',
          },
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});

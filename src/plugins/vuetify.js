import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#DB933E',
        secondary: '#F7E589',
        accent: '#8c9eff',
        error: '#b71c1c',
        success: '#4CAF59',
      },
    },
  },
});

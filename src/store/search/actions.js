import api from '../../utils/api';

export default {
  async randomFood() {
    try {
      const res = await api.get('/random.php');
      return res;
    } catch (err) {
      throw new Error(err.data);
    }
  },
  async searchByIngredient(context, payload) {
    try {
      const res = await api.get(`/search.php?s=${payload}`);
      return res;
    } catch (err) {
      throw new Error(err.data);
    }
  },
};

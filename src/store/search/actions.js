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
};

import axios from 'axios';
import EventBus from '../eventBus';

const api = axios.create({
  baseURL: 'www.themealdb.com/api/json/v1/1/',
});

export function onlyNumbers(value) {
  return parseInt(value.replace(/[^0-9]+/g, ''));
}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response || {};

    if (status === 404) {
      EventBus.$emit('error', 'Operação indisponível no momento');
      return Promise.reject(error);
    }
    if (status === 429) {
      EventBus.$emit('error', 'Operação indisponível no momento');
      return Promise.reject(error);
    }
    if (status === 500) {
      EventBus.$emit('error', 'Operação indisponível no momento');
      return Promise.reject(error);
    }
    if (status === 422) {
      if (error.response && error.response.data && error.response.data.meta && error.response.data.meta.errors) {
        const errors = error.response.data.meta.errors;
        const element = Object.keys(errors)[0];
        let e = typeof errors[element] === 'object' ? errors[element][0] : errors[element];
        if (errors.timeout) {
          e = errors.timeout[0];
        }
        EventBus.$emit('warning', e);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;

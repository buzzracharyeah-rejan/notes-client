import axios from 'axios';

class APIService {
  constructor() {
    this._axios = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 1000,
      headers: { 'X-Custom-Header': 'foobar' },
    });
  }

  static get() {
    if (!APIService.instance) {
      this.instance = new APIService();
    }
    return this.instance;
  }

  get(resource, slug = '') {
    return this._axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }

  post(resource, params, headers) {
    if (headers) {
      return this._axios.post(`${resource}`, params, { headers });
    }
    return this._axios.post(`${resource}`, params);
  }

  update(resource, slug, params) {
    return this._axios.put(`${resource}/${slug}`, params);
  }

  put(resource, params) {
    return this._axios.put(`${resource}`, params);
  }

  delete(resource, slug = '') {
    return this._axios.delete(`${resource}/${slug}`);
  }
}

const apiService = APIService.get();

export default apiService;

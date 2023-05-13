class Jwt {
  constructor() {
    this.ID_TOKEN_KEY = 'idToken';
  }

  static get() {
    if (!Jwt.instance) {
      this.instance = new Jwt();
    }
    return this.instance;
  }

  getToken = (key) => {
    if (!key) return window.localStorage.getItem(this.ID_TOKEN_KEY);
    return window.localStorage.getItem(key);
  };

  saveToken = (token, key) => {
    if (!key) return window.localStorage.setItem(this.ID_TOKEN_KEY, token);
    window.localStorage.setItem(key, token);
  };

  destroyToken = (key) => {
    if (!key) return window.localStorage.removeItem(this.ID_TOKEN_KEY);
    window.localStorage.removeItem(key);
  };
}

const jwtToken = Jwt.get();

export default jwtToken;

class Token {
    constructor() {
        this.key = 'jwt';
    }

    saveToken(token) {
        localStorage.setItem(this.key, token);
    }

    removeToken() {
        localStorage.removeItem(this.key);
    }

    getToken() {
        return localStorage.getItem(this.key);
    }
}

const token = new Token();

export default token;

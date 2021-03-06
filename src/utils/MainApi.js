class MainApi {
    constructor(config) {
        this._address = config.address;
        this._headers = config.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    //Действия пользователя
    registerUser({ name, email, password }) {
        return fetch(`${this._address}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        }).then(this._handleResponse);
    }
    loginUser({ email, password }) {
        return fetch(`${this._address}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }).then(this._handleResponse);
    }
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._handleResponse);
    }
    updateUserInfo(data) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        }).then(this._handleResponse);
    }
    //Действия пользователя

    //Действия с фильмами
    getMovies() {
        return fetch(`${this._address}/movies`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._handleResponse);
    }
    addMovies(data) {
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    }
    deleteMovies(movieId) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._handleResponse);
    }
    //Действия с фильмами

    //Token
    getToken(token) {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then(this._handleResponse);
    }
    updateToken() {
        this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
    //Token
}

const mainApi = new MainApi({
    address: 'https://api.artempavlov.movies.nomoredomains.xyz',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
    },
});

export default mainApi;

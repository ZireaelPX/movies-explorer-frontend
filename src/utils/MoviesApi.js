class MoviesApi {
    constructor(options) {
        this.baseURL = options.baseURL;
        this.headers = options.headers;
    }

    getMovies() {
        return fetch(this.baseURL, {
            headers: this.headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((res) => {
                return res;
            });
    }
}

const options = {
    baseURL: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
};
const moviesApi = new MoviesApi(options);
export default moviesApi;

import axios from "axios";

class ApiFetch {
    constructor() {
        this.instance = axios.create({
            // baseURL: "/api", // Set your base API URL
            withCredentials: true, // Enable sending cookies with requests
        });
    }

    get(url, params = {}) {
        return this.instance.get(url, { ...params });
    }

    post(url, data = {}) {
        return this.instance.post(url, data);
    }

    put(url, data = {}) {
        return this.instance.put(url, data);
    }

    patch(url) {
        return this.instance.patch(url);
    }

    delete(url) {
        return this.instance.delete(url);
    }

    setToken(token) {
        this.instance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${token}`;
    }

    removeToken() {
        delete this.instance.defaults.headers.common["Authorization"];
    }
}

export default new ApiFetch();

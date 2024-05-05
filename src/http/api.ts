import axios from 'axios'
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Length': 'application/json'
    }
})


export const login = async (data: { email: string, password: string }) => {
    return api.post("/api/users/login", data)
}
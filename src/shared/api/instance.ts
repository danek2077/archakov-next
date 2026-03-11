import axios from 'axios'
export const axios_instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketnotes-api-8u3c.onrender.com"
})
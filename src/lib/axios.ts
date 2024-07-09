import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // enviar as info pro backend
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise(
      // Simular um delay da api de 1 a 3s
      (resolve) => setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}

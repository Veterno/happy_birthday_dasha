import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Важно: имя вашего репозитория на GitHub
  base: '/happy_birthday_dasha/', 
})

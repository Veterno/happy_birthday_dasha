/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/happy_birthday_dasha/', // Добавьте эту строчку строго с косыми чертами!
})

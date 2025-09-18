import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // ruta debe de cambiarse para hacer el npm build y genere la carpeta dist, dependiendo de las subcarpetas donde se va a alojar
})

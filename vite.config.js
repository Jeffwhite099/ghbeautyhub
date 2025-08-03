import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/ghbeautyhub/', // Use '/' for dev, '/ghbeautyhub/' for production
  server: {
    host: '0.0.0.0', // Makes it accessible from any device
    port: 5173, // Default Vite port
  },
}))

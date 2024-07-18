import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: "@pages", replacement: '/src/pages' },
      { find: "@ui", replacement: '/src/components/ui' },
      { find: "@components", replacement: '/src/components'},
      { find: "@containers", replacement: '/src/components/containers'},
      { find: "@hooks", replacement: '/src/hooks'},
      { find: "@cocies", replacement: '/src/utils/cokies.ts'},
      { find: "@layout", replacement: '/src/layout'},
      { find: "@layout", replacement: '/src/layout'},
      { find: "@router", replacement: '/src/router'},
      { find: "@images", replacement: '/src/assets/images'},
      { find: "@servicesAuth", replacement: '/src/service/auth'},
      { find: "@validation", replacement: '/src/utils/validation.ts'},
      { find: "@authInterface", replacement: '/src/interface/auth.ts'},
      { find: "@modals", replacement: '/src/components/modals'}
    ]
  }
})

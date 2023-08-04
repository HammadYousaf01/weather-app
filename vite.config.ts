import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      api: "/src/api",
      store: "/src/store",
      pages: "/src/pages",
      src: "/src",
    },
  },
});

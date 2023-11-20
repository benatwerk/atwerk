import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const base = process.env.NODE_ENV === "production" ? "/atwerk/" : "/atwerk";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: base,
    resolve: {
        alias: {
            "@": "/src/",
        },
    },
});

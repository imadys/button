import {
    defineConfig
} from 'vite'
import path from "node:path";
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/Button"),
            name: "button",
            formats: ["es", "umd"],
            fileName: (format) => `button.${format}.js`
        }
    }
})
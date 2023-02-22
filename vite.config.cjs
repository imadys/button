import {
    defineConfig
} from 'vite'
import {
    viteStaticCopy
} from 'vite-plugin-static-copy'
import path from "node:path";
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        react(),
            viteStaticCopy({
                targets: [{
                    src: './src/core/index.js',
                    dest: 'core'
                }]
            })
    ],
    build: {
        lib:
        {
            entry: path.resolve(__dirname, "src/components/button"),
            name: "button",
            formats: ["es", "umd"],
            fileName: (format) => `button.${format}.js`
        }
    }
})
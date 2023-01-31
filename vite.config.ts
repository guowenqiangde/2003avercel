import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'

import unocss from './config/unocss'


const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
};

export default defineConfig({
    build: {
        rollupOptions,
        minify:false,
        lib: {
          entry: "./src/entry.ts",
          name: "BwUI",
          fileName: "bw-ui",
          // 导出模块格式
          formats: ["esm", "umd","iife"],
        },
    },
    plugins:[
        vue(),
        vueJsx({}),
        unocss()
    ]
})
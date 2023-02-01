import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from '@vitejs/plugin-vue-jsx'
import { build, InlineConfig, UserConfig,UserConfigExport } from "vite";
import unocss from './config/unocss'


const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
      assetFileNames: 'style.[ext]',
      globals: {
        vue: "Vue",
      },
    },
};
let config:UserConfigExport = defineConfig({
  build: {
      rollupOptions,
      minify:false,
      cssCodeSplit:true,
      outDir:"./dist",
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
export {config}
export default config
import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // figma_copy フォルダをルートにする
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // figma_copy フォルダ直下の index.html を見る
      },
        output: {
          dir: 'dist', // デフォルトの出力先
        },
    },
  },
  server: {
    open: true,
  },
});
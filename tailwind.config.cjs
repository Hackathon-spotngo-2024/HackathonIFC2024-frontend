/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  corePlugins: {
    preflight: false, // Remove estilos globais padrão
  },
  mode: "jit",
  content: ["./node_modules/flowbite/**/*.js", './components/NavbarComponent.vue', './components/ImagensComponent.vue', './views/AnuncioPage.vue', "./src/**/*.{html,vue,js,ts}",],
  theme: {
    extend: {}
  },
  plugins: [
    flowbitePlugin
  ]
}

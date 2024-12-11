/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
export default {
  corePlugins: {
    preflight: false, // Remove estilos globais padrão
  },
  mode: "jit",
  content: ['./components/NavbarComponent.vue', "./src/**/*.{html,vue,js,ts}",],
  theme: {
    extend: {}
  },
  plugins: [
    flowbitePlugin
  ]
}

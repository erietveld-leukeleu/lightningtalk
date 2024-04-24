const defaultTheme = require('tailwindcss/defaultTheme');

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  plugins: [
    '~/plugins/Vue3Lottie.client.ts'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  tailwindcss: {
    config: {
      theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'leukeleudark': '#222222',
          'leukeleudarker': '#4e3741',
          'leukeleu': '#EB4D7F',
          'white': '#FFFFFF'
        },
        extend: {
          fontFamily: {
            leukeleu: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
            leukeleucontent: ["Roboto", ...defaultTheme.fontFamily.sans],
          },
          fontSize: {
            xxl: '3rem'
          },
          backgroundImage: {
            'leukeleugradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
          },
          boxShadow: {
            'leukeleu': '0 35px 120px -15px rgba(235, 77, 127, 0.1), 0 -35px 120px -15px rgba(235, 77, 127, 0.1) ',
          }
        }
      },
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: {
        class: [
          'overflow-hidden'
        ]
      }
    }
  }
})

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "my-nuxt-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    // vendor: ['element-ui'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  },

  modules: ["@nuxtjs/axios"],
  axios: {},
  css: ["element-ui/lib/theme-chalk/index.css"],
  plugins: [
    { src: "~/plugins/filter.js", ssr: false },
    { src: "~/plugins/localStorage.js", ssr: false },
    { src: "~/plugins/routerOption.js", ssr: false },
    { src: "~plugins/element-ui", ssr: true },
    { src: "~/plugins/vee-validate", ssr: false }
  ],

  build: {
    transpile: ["vee-validate/dist/rules"]
  },

  env: {
    userUrl: process.env.USER_URL || "http://localhost:8080",
    postUrl: process.env.POST_URL || "http://localhost:8090",
    pointUrl: process.env.POINT_URL || "http://localhost:9000"
  }
}

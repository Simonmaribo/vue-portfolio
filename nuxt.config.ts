import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon'
    ],
    meta: {
        title: "Simon Maribo | Portfolio",
        link: [
            { rel: "icon", type: "image/x-icon", href: "/simonmaribo.png" },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"}
        ],
        script: [
            { src: "https://cdn.splitbee.io/sb.js", async: true },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" },
        ]
    },
    runtimeConfig: {
        public: {
            baseUrl: ''
        }
    }
})

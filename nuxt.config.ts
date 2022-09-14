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
        ]
    }
})

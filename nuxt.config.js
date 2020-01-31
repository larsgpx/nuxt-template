import webpack from 'webpack';

const pkg = require('./package');
const locale = process.env.NUXT_LOCALE || 'es'

export default {
    // modern: 'client',
    head: {
        meta: [
        { charset: 'utf-8' },
        { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1' }
        ],
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' }
        ]
    },
    watchQuery: ['page'],
    // buildModules: [
    //     '@nuxtjs/eslint-module',
    //     ['~/modules/docs/', { port: 3001 }],
    //     '~/modules/crawler/',
    //     '~/modules/static/',
    //     '~/modules/components/',
    //     // https://github.com/nuxt-community/netlify-files-module
    //     '@nuxtjs/netlify-files',
    //     // https://github.com/nuxt-community/style-resources-module
    //     '@nuxtjs/style-resources',
    //     // https://github.com/Developmint/nuxt-svg-loader/
    //     'nuxt-svg-loader',
    //     // https://github.com/Atinux/nuxt-tailwindcss/
    //     '@nuxtjs/tailwindcss',
    //     // https://pwa.nuxtjs.org
    //     '@nuxtjs/pwa'
    // ],
    // modules: [
    //     // https://http.nuxtjs.or
    //     '@nuxt/http'
    // ],
    http: {
        proxy: true
    },
    buildDir: 'nuxt-dist',
    css: [
        'materialize-css/dist/css/materialize.css',
        '@/assets/scss/index.scss'
    ],
    dev: (process.env.NODE_ENV !== 'production'),
    js:[
        'materialize-css'
    ],
    plugins: [
        // '~/plugins/init.js',
        // '~/plugins/intersection-observer.client.js',
        // '~/plugins/ga.client.js',
        // '~/plugins/adblock.client.js',
        // '~/plugins/newsletter.client.js'
    ],
    env: {
        DOC_SEARCH_API_KEY: process.env.DOC_SEARCH_API_KEY || 'ff80fbf046ce827f64f06e16f82f1401',
        NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com',
        LOCALE: locale
    },
    manifest: {
        lang: locale
    },
    loading: { color: '#41B883' },
    generate: {
        fallback: true,
        interval: 100
    }
}
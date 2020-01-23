import webpack from 'webpack';
export default{    
    css: [
        'materialize-css/dist/css/materialize.css',
        '@/assets/scss/index.scss'
    ],
    dev: (process.env.NODE_ENV !== 'production'),
    js:[
        'materialize-css'
    ]
    
}
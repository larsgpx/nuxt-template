<template>        
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><nuxt-link class="nav nav-li" to="/">Home</nuxt-link> </li>
                <li><nuxt-link class="nav nav-li" to="/about">Nosotros</nuxt-link></li>
                <li><nuxt-link class="nav nav-li" to="/contact">Contáctanos</nuxt-link></li>
            </ul>
            </div>
        </nav>    
</template>
<script>
export default {
    data() {
        return {
            burger: false,
            ifMobile: false,                  
        }
    },
    methods: {
        open() {
            this.burger = !this.burger;
        }     
         
    }
}
</script>
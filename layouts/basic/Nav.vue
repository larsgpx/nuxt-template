<template>        
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper grey lighten-5">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><nuxt-link class="nav nav-li black-text" to="/">Home</nuxt-link> </li>
                    <li><nuxt-link class="nav nav-li black-text" to="/about">Nosotros</nuxt-link></li>
                    <li><nuxt-link class="nav nav-li black-text" to="/contact">Contáctanos</nuxt-link></li>
                </ul>
                </div>
            </nav>
        </div>    
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
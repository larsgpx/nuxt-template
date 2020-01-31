<template>        
       <div>
            <div class="navbar-fixed">
                <nav class="grey lighten-5 ">
                    <div class="container nav-wrapper grey lighten-5">
                        <nuxt-link to="/" class="brand-logo"><img src="~/assets/images/nuxt.png"></nuxt-link>
                        <a href="#" data-target="mobile-sidenav" class="sidenav-trigger "><i class="material-icons grey-text lighten-5">menu</i></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><nuxt-link class="nav nav-li black-text" to="/">Home</nuxt-link> </li>
                            <li><nuxt-link class="nav nav-li black-text" to="/about">Nosotros</nuxt-link></li>
                            <li><nuxt-link class="nav nav-li black-text" to="/contact">Contáctanos</nuxt-link></li>
                        </ul>
                    </div>
                </nav>                    
            </div> 
            <ul class="sidenav" id="mobile-sidenav">
                <li><nuxt-link class="nav nav-li black-text" to="/">Home</nuxt-link> </li>
                <li><nuxt-link class="nav nav-li black-text" to="/about">Nosotros</nuxt-link></li>
                <li><nuxt-link class="nav nav-li black-text" to="/contact">Contáctanos</nuxt-link></li>
            </ul>
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
         
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
        });

    },
}
</script>
<style lang="scss">
    .brand-logo{
        img{
            max-width: 150px;
            padding-left:5px;
        }
    }
</style>
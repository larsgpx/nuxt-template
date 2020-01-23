<template>
    <div class="bg">    
        <navb></navb>
        <nuxt/>    
    </div>
</template>
<script>
import Navb from './basic/Nav';
export default {
    components:{
        Navb
    },
     head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      ]
    }
  },
  mounted() {
      //inicializar JS MaterializeCSS
    document.addEventListener('DOMContentLoaded', function() {
        M.AutoInit();
    });
  },
}


</script>
<style>

</style>
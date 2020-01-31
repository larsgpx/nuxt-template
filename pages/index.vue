<template>
    <div>    
        <keep-alive>
            <carousel tipoCarousel="normal" title="Titulo" subtitle="subtitulo" Bannerimg="https://i.picsum.photos/id/229/1600/600.jpg"></carousel>
        </keep-alive>
        <div class="container">
            <p>index</p>        
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import env from '../config/env';
import Carousel from '../components/Carousel';
export default {    
    layout:'basetemplate',
    data() {
        return {
            titulo: 'Listado de Blogs ',  
        }
    },
    components:{
        Carousel
    }   
}
</script>
<style scoped>    
    p{
       margin-top:100px; 
    }
</style>
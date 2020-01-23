<template>
    <div>
        <div v-if="tipoCarousel == 'carousel'" class="carousel carousel-slider center">
            
            <div :Carousel="carousel" v-for="carousel in carouseles.slice(0,12)" :key="carousel.id" class="carousel-item white-text" href="#one!">
                <!-- boton fixed para multiples vistas -->
                <!-- <div class="carousel-fixed-item center">
                    <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div> -->
                <p>{{ Carousel.title }}</p>
                <p class="white-text">{{ Carousel.subtitle }}</p>
                <div class="carousel-fixed-item center">
                    <a :href="Carousel.url" class="btn waves-effect white grey-text darken-text-2">Click aquí</a>
                </div>
            </div>       
        </div>  
        <div v-if="tipoCarousel == 'normal'" class="one-banner">
            <div class="parallax-container white-text">
                 <span class="title-banner white-text" >{{title}}</span>
                <p class="subtitle-banner white-text">{{ subtitle }}</p>
                <div class="parallax"><img :src="Bannerimg"></div>
            </div>                     
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            carouseles: []
        }
    },
    props:{
        tipoCarousel:{
            type: String,
            required: true,            
        },
        //Carouseles
        Carousel:Object,
        //Banners normales
        title: String,
        subtitle: String,
        Bannerimg: String      
    }
}
</script>
<style lang="scss">
    .carousel-slider{
        .carousel-item {
            background-image:url('https://i.picsum.photos/id/219/1600/600.jpg');
            background-size: cover;
            background-position: center center;
        }
    }
</style>
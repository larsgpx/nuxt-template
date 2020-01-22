<template>
    <div class="container">
        <nuxt-link to="/blog" class="waves-effect waves-light btn">Regresar</nuxt-link> 
        
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s3">
              <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s3">
              <span class="black-text">
                {{album.title}}                                                            
              </span>              
            </div>
            <img :src="photo.thumbnailUrl" :alt="photo.title" width="50" v-for="photo in photos.slice(0, 5)" :key="photo.id">                                        
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import router from 'vue-router';
import axios from 'axios';
import env from '../../config/env';
export default {
    layout:'basetemplate',
    data() {
        return {
            album:{},
            photos:[]
        }
    },
    created: async function(){
        let albumResponse = await axios.get(`${env.endpoint}/albums/${this.$route.params.id}`);
        this.album = albumResponse.data;

        let photoResponse = await axios.get(`${env.endpoint}/albums/${this.$route.params.id}/photos/`);
        this.photos = photoResponse.data;        
    }
}
</script>
<style lang="css">
    .container{
        margin-top:100px;        
    }
</style>
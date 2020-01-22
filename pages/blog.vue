<template>
    <div class="container">
     <h1>{{titulo}}</h1>   
     <div class="row">
         <blog-card class="col s4" :Blog="blog" v-for="blog in blogs.slice(0,12)" :key="blog.id"/>
     </div>
    </div>
</template>
<script>
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import env from '../config/env';
export default {    
    layout:'basetemplate',
    data() {
        return {
            titulo: 'Listado de blogs ',
            blogs: []
        }
    },
    components:{
        BlogCard
    },
    created: async function(){
        let response = await axios.get(`${env.endpoint}/albums`)
        this.blogs = response.data;
    }
}
</script>
<style scoped>    
        li{
            list-style: none;
        }
</style>
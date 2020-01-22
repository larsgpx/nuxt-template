<template>
    <div>    
        <div class="container">
            <p>index</p>        
        </div>
    </div>
</template>
<script>
// import axios from 'axios';
import env from '../config/env';
export default {    
    layout:'basetemplate',
    data() {
        return {
            titulo: 'Listado de Blogs ',  
        }
    }    
}
</script>
<style scoped>    
    p{
       margin-top:100px; 
    }
</style>
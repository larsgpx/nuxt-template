<template>
    <div>                        
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h2 class="header">{{Blog.id}}</h2>
                        <p>{{Blog.title}}</p>
                    </div>
                    <div class="card-action">                        
                        <nuxt-link :to="`/blogs/${Blog.id}`">Click aquí</nuxt-link>
                    </div>
                </div>
            </div>    
    </div>
</template>
<script>
export default {
    layout:'basetemplate',
    name:'BlogCard',
    props:{
        Blog:Object
    }
}
</script>
<style scoped>

</style>
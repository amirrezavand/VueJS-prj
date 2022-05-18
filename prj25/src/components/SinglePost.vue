<template>
    <div>
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
    </div>
</template>


<script>

export default ({
    data() {
        return {
            post: {
                title:'New Post',
                description:'Post Desription'
            }
        }
    },
})
</script>

<template>
    <div>
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
        <a href="" @click.prevent="changeTitle()">Click here to change title</a>
    </div>
</template>


<script>

export default ({
    props: ['data','isActive'],
    data() {
        return {
            post : this.data
        }
    },
    methods: {
        changeTitle(){
            this.post.title=this.post.title+'+';
        }
    }
})
</script>

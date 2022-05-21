<template>
    <div :class="{'bgcolor-grey':isActive}" class="p-3">
        <div class="title">{{post.title}}</div>
        <div>{{post.description}}</div>
        <a href="" @click.prevent="changeTitle()">Click here to change title</a>
    </div>
</template>


<script>

export default ({
    emits : ['title-changed'],
    props: {
        data : {
            type : Object,
            require : false,
            default : function(){
                return {
                    title : 'News Post 1',
                    description : 'Post 1 Description',
                    isActive : 1,
                }
            }
        },
        isActive: {
            type : Number,
            require : false,
            default : 1,
            validator(value) {
                return value==0||value==1;
            }
        }
    },
    data() {
        return {
            post : {...this.data}
        }
    },
    methods: {
        changeTitle(){
            this.post.title=this.post.title+'+';
            this.$emit('title-changed',this.post)
        }
    }
})
</script>

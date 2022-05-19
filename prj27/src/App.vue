<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <a href="" @click.prevent="changeTitle()">change title</a>
      <h2>
          posts
      </h2>
      <hr>
      <div v-for="post in posts" :key="post.tilte">
        <single-post :data="post" :is-active='post.isActive'></single-post>
        <hr>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import SinglePost from './components/SinglePost.vue'
export default {
  data() {
    return {
      posts: [
        {
        title:'News Post 1',
        description:'Post 1 Description',
        isActive : 1,
        },
        {
          title:'News Post 2',
          description:'Post 2 Description',
          isActive : 0,
        },
        {
          title:'News Post 3',
          description:'Post 3 Description',
          isActive : 0,
        }
      ]
    }
  },
  name: 'App',
  components: {
    SinglePost
  },
  methods: {
    changeTitle(){
      this.posts[0].title=this.posts[0].title+'---';
    }
  }
}
</script>

<style>
.title {
  color: red;
}
.bgcolor-grey{
  background-color: rgb(142, 167, 158);
}
</style>

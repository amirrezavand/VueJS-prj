<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h2>
          posts
      </h2>
      <hr>
      <single-post></single-post>
      <single-post></single-post>
      <single-post></single-post>
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
        title:'News POST 1',
        description:'Post 1 Description',
        },
        {
          title:'News POST 2',
          description:'Post 2 Description',
        },
        {
          title:'News POST 3',
          description:'Post 3 Description',
        }
      ]
    }
  },
  name: 'App',
  components: {
    SinglePost
  }
}
</script>

<style>
.title {
  color: red;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div>
          <div class="my-4">{{this.user}}</div>
          <a href="" @click.prevent="changeUser()">Click To Change User</a>
        </div>
        
        <a href="" @click.prevent="changeTitle()">change title</a>
        <h2>posts</h2>
        <hr />
        <div v-for="post in posts" :key="post.tilte">
          <single-post
            :data="post"
            :is-active="post.isActive"
            :user="user" 
            @title-changed="onTitleChange"
          ></single-post>
          <hr />
        </div>
      </div>

      <div class="col-md-4">
        <h3>latest Posts</h3>
        <ul class="list-group">
          <li class="list-group-item" v-for="post in posts" :key="post.title">
            {{ post.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from "./components/SinglePost.vue";
import {computed} from 'vue';
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "News Post 1",
          description: "Post 1 Description",
          isActive: 1,
        },
        {
          id: 2,
          title: "News Post 2",
          description: "Post 2 Description",
          isActive: 0,
        },
        {
          id: 3,
          title: "News Post 3",
          description: "Post 3 Description",
          isActive: 0,
        },
      ],
      user: 'Amir Hossain Rezavand',
    };
  },
  name: "App",
  components: {
    SinglePost,
  },
  // provide:{
  //   user : 'Amir Hossain Rezavand'
  // },
  provide(){
    return {
      user :computed(()=>this.user),
      changeuser:this.changeUser,
    }
  },
  methods: {
    changeUser(user){
      if(user) this.user=user;
      else this.user = 'Updated by Amir Hossain Rezavand';
    },
    changeTitle() {
      this.posts[0].title = this.posts[0].title + "---";
    },
    selectChange(event) {
      console.log(event.target.value);
    },
    onTitleChange(event) {
      let index = this.posts.findIndex((post) => post.id == event.id);
      this.posts[index].title = event.title + "this is another ";
    },
  },
};
</script>

<style>
.title {
  color: red;
}
.bgcolor-grey {
  background-color: rgb(142, 167, 158);
}
</style>

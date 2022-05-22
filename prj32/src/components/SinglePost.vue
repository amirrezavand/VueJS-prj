<template>
  <div :class="{ 'bgcolor-grey': isActive }" class="p-3">
    <div class="title">{{ post.title }}</div>
    <!-- <post-user :user="user"></post-user> -->
    <post-user></post-user>
    <div>{{ post.description }}</div>
    <a href="" @click.prevent="changeTitle()">Click here to change title</a>
  </div>
</template>


<script>
import { Post } from "../services/PostService";
import PostUser from "./PostUser.vue"
export default {
  emits: {
    "title-changed": (post) => {
      if (post instanceof Post) {
        return true;
      }
      console.log("invalid post data");
      return false;
    },
  },
  components: {
    PostUser,
  },
  props: ['data','isActive'],
  data() {
    return {
      post: { ...this.data },
    };
  },
  methods: {
    changeTitle() {
      this.post.title = this.post.title + "+";
      const PostData = new Post(
        this.post.id,
        this.post.title,
        this.post.description
      );
      this.$emit("title-changed", PostData);
    },
  },
};
</script>

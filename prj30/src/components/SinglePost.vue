<template>
  <div :class="{ 'bgcolor-grey': isActive }" class="p-3">
    <div class="title">{{ post.title }}</div>
    <div>{{ post.description }}</div>
    <a href="" @click.prevent="changeTitle()">Click here to change title</a>
  </div>
</template>


<script>
import { Post } from "../services/PostService";
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
  props: {
    data: {
      type: Object,
      require: false,
      default: function () {
        return {
          title: "News Post 1",
          description: "Post 1 Description",
          isActive: 1,
        };
      },
    },
    isActive: {
      type: Number,
      require: false,
      default: 1,
      validator(value) {
        return value == 0 || value == 1;
      },
    },
  },
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

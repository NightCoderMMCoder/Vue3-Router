<template>
  <h2 class="mb-3">{{ title }}</h2>
  <div class="row">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :col="col"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    title: {
      type: String,
      default: "Uploaded Posts",
    },
    posts: Array,
    col: String,
  },
};
</script>

<style></style>

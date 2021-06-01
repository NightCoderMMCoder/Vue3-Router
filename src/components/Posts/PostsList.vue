<template>
  <h2 class="mb-3">{{ title }}</h2>
  <div class="row">
    <post-item></post-item>
    <post-item></post-item>
    <post-item></post-item>
    <post-item></post-item>
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
  },
};
</script>

<style></style>

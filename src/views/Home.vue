<template>
  <div>
    <posts-list :posts="posts" col="col-lg-4"></posts-list>
  </div>
</template>

<script>
import useGetPosts from "../hooks/getPosts";
import PostsList from "../components/Posts/PostsList.vue";
export default {
  components: { PostsList },
  setup() {
    const { posts } = useGetPosts();
    return { posts };
  },
};
</script>

<style></style>

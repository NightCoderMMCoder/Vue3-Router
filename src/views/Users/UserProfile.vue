<template>
  <div>
    <h1>User Profile</h1>
    <posts-list :posts="posts"></posts-list>
  </div>
</template>

<script>
import useGetPosts from "../../hooks/getPosts";
import PostsList from "../../components/Posts/PostsList.vue";
export default {
  components: { PostsList },
  setup() {
    const { posts } = useGetPosts();
    return { posts };
  },
};
</script>

<style></style>

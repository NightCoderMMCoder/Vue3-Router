<template>
  <div>
    <h1>User Profile</h1>
    <h1 v-if="loading">Loading...</h1>
    <posts-list :posts="posts" v-else></posts-list>
    <Pagination
      @nex-posts="nexPosts"
      @prev-posts="prevPosts"
      :page="page"
      :last-page="lastPage"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Pagination from "../../components/Posts/Pagination.vue";
import PostsList from "../../components/Posts/PostsList.vue";
import usePagination from "../../hooks/pagination";
export default {
  components: { PostsList, Pagination },
  setup() {
    const route = useRoute();
    const {
      posts,
      nexPosts,
      prevPosts,
      loading,
      lastPage,
      page,
    } = usePagination("UserPosts", { userId: route.params.userId });

    return { posts, nexPosts, prevPosts, loading, lastPage, page };
  },
};
</script>

<style></style>

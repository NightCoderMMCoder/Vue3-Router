<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <posts-list :posts="posts" col="col-lg-4" v-else></posts-list>
    <Pagination
      @nex-posts="nexPosts"
      @prev-posts="prevPosts"
      :page="page"
      :last-page="lastPage"
    />
  </div>
</template>

<script>
import PostsList from "../components/Posts/PostsList.vue";
import Pagination from "../components/Posts/Pagination.vue";
import usePagination from "../hooks/pagination";
export default {
  components: { PostsList, Pagination },
  setup() {
    const {
      posts,
      nexPosts,
      prevPosts,
      loading,
      lastPage,
      page,
    } = usePagination("Home");

    return { posts, nexPosts, prevPosts, loading, lastPage, page };
  },
};
</script>

<style></style>

<template>
  <section>
    <show-case></show-case>
    <div class="container" style="margin: 40px auto;">
      <h1 v-if="loading">Loading...</h1>
      <posts-list :posts="posts" col="col-lg-4" v-else></posts-list>
      <Pagination
        @nex-posts="nexPosts"
        @prev-posts="prevPosts"
        :page="page"
        :last-page="lastPage"
      />
    </div>
  </section>
</template>

<script>
import PostsList from "../components/Posts/PostsList.vue";
import Pagination from "../components/Posts/Pagination.vue";
import usePagination from "../hooks/pagination";
import ShowCase from "./ShowCase.vue";
export default {
  components: { PostsList, Pagination, ShowCase },
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

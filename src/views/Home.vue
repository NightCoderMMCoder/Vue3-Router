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
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useGetPosts from "../hooks/getPosts";
import PostsList from "../components/Posts/PostsList.vue";
import Pagination from "../components/Posts/Pagination.vue";
export default {
  components: { PostsList, Pagination },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const query = route.query.page;
    const page = ref(query ? +query : 1);
    const { posts, getPosts, loading, getAllPosts, lastPage } = useGetPosts();
    getAllPosts();

    watch(
      page,
      (val) => {
        if (val) {
          getPosts(val);
        }
      },
      { immediate: true }
    );

    const nexPosts = () => {
      page.value++;
      router.push({ name: "Home", query: { page: page.value } });
    };

    const prevPosts = () => {
      page.value--;
      router.push({ name: "Home", query: { page: page.value } });
    };
    return { posts, nexPosts, prevPosts, loading, lastPage, page };
  },
};
</script>

<style></style>

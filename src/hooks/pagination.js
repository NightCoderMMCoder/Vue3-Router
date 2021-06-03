import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import useGetPosts from "../hooks/getPosts";
const usePagination = (direction, params = {}) => {
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
    router.push({
      name: direction,
      params,
      query: { page: page.value },
    });
  };

  const prevPosts = () => {
    page.value--;
    router.push({
      name: direction,
      params,
      query: { page: page.value },
    });
  };
  return { posts, nexPosts, prevPosts, loading, lastPage, page };
};

export default usePagination;

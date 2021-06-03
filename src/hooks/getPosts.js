import { ref } from "vue";
const useGetPosts = () => {
  const loading = ref(false);
  const posts = ref([]);
  const getPosts = (page) => {
    loading.value = true;
    fetch("https://jsonplaceholder.typicode.com/posts?_page=" + page)
      .then((res) => res.json())
      .then((data) => {
        posts.value = data;
        loading.value = false;
      });
  };
  return { posts, loading, getPosts };
};

export default useGetPosts;

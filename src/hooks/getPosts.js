import { ref } from "vue";
const useGetPosts = () => {
  const loading = ref(false);
  const posts = ref([]);
  const lastPage = ref(0);
  const getPosts = (page) => {
    loading.value = true;
    fetch("https://jsonplaceholder.typicode.com/posts?_page=" + page)
      .then((res) => res.json())
      .then((data) => {
        posts.value = data;
        loading.value = false;
      });
  };
  const getAllPosts = (page = 1) => {
    loading.value = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        lastPage.value = Math.ceil(data.length / 10);
        loading.value = false;
      });
  };
  return { posts, loading, getPosts, lastPage, getAllPosts };
};

export default useGetPosts;

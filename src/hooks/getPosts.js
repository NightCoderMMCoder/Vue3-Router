import { ref } from "vue";
const useGetPosts = () => {
  const posts = ref([]);
  fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
    .then((res) => res.json())
    .then((data) => {
      posts.value = data;
    });
  return { posts };
};

export default useGetPosts;

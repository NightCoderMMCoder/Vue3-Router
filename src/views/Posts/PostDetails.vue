<template>
  <div>
    <h1 v-if="loading">
      Loading...
    </h1>
    <div v-else>
      <button class="btn btn-primary mb-3" @click="$router.go(-1)">
        Back
      </button>

      <div class="card">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg"
          class="card-img-top"
          alt="image"
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();

    fetch("https://jsonplaceholder.typicode.com/posts/" + route.params.postId)
      .then((res) => res.json())
      .then((data) => {
        post.value = data;
        loading.value = false;
      });
    return { post, loading };
  },
};
</script>

<style></style>

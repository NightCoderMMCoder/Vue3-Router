<template>
  <div class="col-12 col-md-6 mb-3" :class="col">
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
        <!-- <router-link to="/posts/afsddfas" class="btn btn-success"
          >View Details</router-link
        > -->
        <button class="btn btn-success" @click="viewDetails">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    post: Object,
    col: {
      type: String,
      default: "col-lg-6",
    },
  },
  setup({ post }) {
    const router = useRouter();
    const viewDetails = () => {
      router.push({ name: "PostDetails", params: { postId: post.id } });
    };
    return { viewDetails };
  },
};
</script>

<style></style>

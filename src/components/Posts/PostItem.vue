<template>
  <div class="col-12 col-md-6 col-lg-4 mb-3">
    <div class="card">
      <img
        src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg"
        class="card-img-top"
        alt="image"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
  setup() {
    const router = useRouter();
    const viewDetails = () => {
      router.push({ name: "PostDetails", params: { postId: "asfdafsd" } });
    };
    return { viewDetails };
  },
};
</script>

<style></style>

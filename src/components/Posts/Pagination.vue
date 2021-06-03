<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item">
        <button
          class="btn btn-primary me-3"
          @click="$emit('prevPosts')"
          :disabled="page <= 1"
        >
          Previous
        </button>
      </li>
      <li class="page-item">
        <button
          class="btn btn-primary"
          @click="$emit('nexPosts')"
          :disabled="page >= lastPage"
        >
          Next
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: { page: Number, lastPage: Number },
};
</script>

<style></style>

<template>
  <div>
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
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

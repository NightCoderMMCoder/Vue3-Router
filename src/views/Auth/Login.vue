<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Name"
      />
      <button class="btn btn-primary mt-3" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("");
    const handleSubmit = () => {
      localStorage.setItem("user", name.value);
    };
    return { name, handleSubmit };
  },
};
</script>

<style></style>

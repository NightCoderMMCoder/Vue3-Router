<template>
  <navbar></navbar>
  <!-- <show-case v-if="$route.name === 'Home'"></show-case> -->
  <router-view name="showCase"></router-view>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from "./components/Layouts/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
main {
  padding: 40px 0;
}
</style>

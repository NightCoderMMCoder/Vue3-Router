<template>
  <navbar></navbar>
  <!-- <show-case v-if="$route.name === 'Home'"></show-case> -->
  <!-- <router-view v-slot="slotProps" name="showCase">
    <transition name="page" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->
  <main>
    <router-view v-slot="slotProps">
      <transition name="page" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
main > div {
  padding: 40px 0;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s linear;
}
</style>

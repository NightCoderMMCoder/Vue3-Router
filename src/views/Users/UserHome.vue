<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <ul class="list-group">
        <router-link class="list-group-item" :to="`/user/${userId}`">
          User Profile
        </router-link>
        <router-link class="list-group-item" :to="`/user/${userId}/posts`"
          >User Posts</router-link
        >
        <router-link class="list-group-item" :to="`/user/${userId}/account`">
          User Account
        </router-link>
      </ul>
    </div>
    <div class="col-12 col-md-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
export default {
  props: ["userId"],
  // setup(props) {
  // console.log(props.userId);
  // const route = useRoute();
  // console.log(route.params.userId);
  // },
};
</script>

<style scoped>
.exact {
  z-index: 2;
  color: #fff;
  background-color: #1a1a1a;
  border-color: #1a1a1a;
}
</style>

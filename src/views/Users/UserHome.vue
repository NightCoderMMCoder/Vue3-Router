<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <ul class="list-group">
        <router-link
          class="list-group-item active"
          to="/user/adfsafdsafdsasdfasdf"
        >
          User Profile
        </router-link>
        <router-link
          class="list-group-item"
          to="/user/adfsafdsafdsasdfasdf/posts"
          >User Posts
        </router-link>
        <router-link
          class="list-group-item"
          to="/user/adfsafdsafdsasdfasdf/account"
          >Account
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
  // props: ["userId"],
  // setup(props) {
  // console.log(props.userId);
  // const route = useRoute();
  // console.log(route.params.userId);
  // },
};
</script>

<style></style>

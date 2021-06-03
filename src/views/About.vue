<template>
  <div class="container">
    <h1>About US</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iste eius
      quo amet provident quasi quibusdam quisquam odit eaque. Magni dignissimos
      natus amet possimus voluptates ea, repudiandae quos. Modi, unde?
    </p>
    <button @click="$router.push('/about?query=afsd')">Click Me</button>
  </div>
</template>

<script>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
export default {
  // beforeRouteEnter(to, from, next) {
  //   console.log("before enter");
  //   next();
  // },
  // beforeRouteUpdate(to, from) {
  //   console.log(to, from);
  // },
  setup() {
    console.log("setup run");
    function getData() {
      setTimeout(() => {
        console.log("data");
      }, 3000);
    }
    onBeforeRouteUpdate(() => {
      console.log(getData());
    });
    onBeforeRouteLeave(() => {
      console.log("onBeforeRouteLeave");
    });
    getData();
  },
};
</script>

<style></style>

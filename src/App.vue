<template>
  <div id="app">
    <TheNavbar class="navbar" />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

<style>
.navbar {
  margin-bottom: 5px;
}
</style>

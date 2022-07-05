<template>
  <div>
    <router-link :to="{ name: 'jobs' }"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

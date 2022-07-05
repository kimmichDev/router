<template>
  <div>
    <button class="btn btn-primary" @click="goBack">Back</button>
    <h3>Job detail</h3>
    {{ $route.params.id }}
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  props: ["id"],
  setup(props, context) {
    console.log(props.id);
    let route = useRoute();
    console.log(route.params.id);
    let router = useRouter();

    // router.go(1, -1)
    let goBack = () => router.push({ name: "jobs" });
    return { goBack };
  },
};
</script>

<style lang="scss" scoped></style>

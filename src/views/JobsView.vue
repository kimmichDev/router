<template>
  <div>
    <h5>Job list</h5>
    <Jobs></Jobs>
  </div>
</template>

<script>
import Jobs from "../components/Jobs.vue";
export default {
  components: { Jobs },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

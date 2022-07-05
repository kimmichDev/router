<template>
  <div>
    <p>Jobs</p>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'jobDetail', params: { id: job.id } }">
          {{ job.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let jobs = ref([
      { id: 1, title: "job title 1", description: "job title 1 description" },
      { id: 2, title: "job title 2", description: "job title 1 description" },
      { id: 3, title: "job title 3", description: "job title 1 description" },
      { id: 4, title: "job title 4", description: "job title 1 description" },
    ]);
    return { jobs };
  },
};
</script>

<style lang="scss" scoped></style>

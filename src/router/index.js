import { createRouter, createWebHistory } from 'vue-router'

import JobViews from "../views/JobsView.vue"
import JobDetailView from "../views/JobDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/jobs/afasf/asdfasdf",
      name: "jobs",
      component: JobViews
    },
    {
      path: "/jobs/:id",
      name: "jobDetail",
      props: true,
      component: JobDetailView
    },

  ]
})

export default router

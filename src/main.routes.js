import { createRouter, createWebHistory } from "vue-router";

import landingRoutes from "@/app/landing/landing.routes";
import loanRoutes from "@/app/loan/loan.routes";
import generalRoutes from "@/app/general/general.routes";

const routes = [...landingRoutes, ...loanRoutes, ...generalRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

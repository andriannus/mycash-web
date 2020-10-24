import { createRouter, createWebHistory } from "vue-router";

import landingRoutes from "@/app/landing/landing.routes";
import loanRoutes from "@/app/loan/loan.routes";

const routes = [...landingRoutes, ...loanRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

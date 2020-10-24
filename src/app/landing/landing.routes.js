const landingRoutes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "./Landing.vue"),
  },
];

export default landingRoutes;

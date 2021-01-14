const landingRoutes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "./landing.component.vue"),
  },
];

export default landingRoutes;

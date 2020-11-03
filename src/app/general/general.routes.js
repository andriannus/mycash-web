import General from "./General.vue";

const generalRoutes = [
  {
    path: "/",
    component: General,
    children: [
      {
        path: "about-us",
        name: "AboutUs",
        component: () =>
          import(/* webpackChunkName: "about-us" */ "./about-us/AboutUs.vue"),
      },
    ],
  },
];

export default generalRoutes;

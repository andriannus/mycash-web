import General from "./general.component.vue";

const generalRoutes = [
  {
    path: "/",
    component: General,
    children: [
      {
        path: "about-us",
        name: "AboutUs",
        component: () =>
          import(
            /* webpackChunkName: "about-us" */ "./about-us/about-us.component.vue"
          ),
      },
    ],
  },
];

export default generalRoutes;

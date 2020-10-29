import Loan from "./Loan.vue";

const loanRoutes = [
  {
    path: "/loan",
    component: Loan,
    children: [
      {
        path: "",
        redirect: "/loan/purpose",
      },
      {
        path: "purpose",
        name: "LoanPurpose",
        component: () =>
          import(
            /* webpackChunkName: "loan-purpose" */ "./loan-purpose/LoanPurpose.vue"
          ),
      },
      {
        path: "venture-capital",
        name: "LoanVentureCapital",
        component: () =>
          import(
            /* webpackChunkName: "loan-venture-capital" */ "./loan-venture-capital/LoanVentureCapital.vue"
          ),
      },
      {
        path: "confirm-area",
        name: "LoanConfirmArea",
        component: () =>
          import(
            /* webpackChunkName: "loan-confirm-area" */ "./loan-confirm-area/LoanConfirmArea.vue"
          ),
      },
      {
        path: "outside-area",
        name: "LoanOutsideArea",
        component: () =>
          import(
            /* webpackChunkName: "loan-outside-area" */ "./loan-outside-area/LoanOutsideArea.vue"
          ),
      },
    ],
  },
];

export default loanRoutes;

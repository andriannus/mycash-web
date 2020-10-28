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
    ],
  },
];

export default loanRoutes;

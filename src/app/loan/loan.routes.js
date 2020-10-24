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
    ],
  },
];

export default loanRoutes;

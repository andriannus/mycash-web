import Loan from "./loan.component.vue";

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
            /* webpackChunkName: "loan-purpose" */ "./loan-purpose/loan-purpose.component.vue"
          ),
      },
      {
        path: "venture-capital",
        name: "LoanVentureCapital",
        component: () =>
          import(
            /* webpackChunkName: "loan-venture-capital" */ "./loan-venture-capital/loan-venture-capital.component.vue"
          ),
      },
      {
        path: "confirm-area",
        name: "LoanConfirmArea",
        component: () =>
          import(
            /* webpackChunkName: "loan-confirm-area" */ "./loan-confirm-area/loan-confirm-area.component.vue"
          ),
      },
      {
        path: "ktp-address",
        name: "LoanKtpAddress",
        component: () =>
          import(
            /* webpackChunkName: "loan-ktp-address" */ "./loan-ktp-address/loan-ktp-address.component.vue"
          ),
      },
      {
        path: "ktp-data",
        name: "LoanKtpData",
        component: () =>
          import(
            /* webpackChunkName: "loan-ktp-data" */ "./loan-ktp-data/loan-ktp-data.component.vue"
          ),
      },
      {
        path: "outside-area",
        name: "LoanOutsideArea",
        component: () =>
          import(
            /* webpackChunkName: "loan-outside-area" */ "./loan-outside-area/loan-outside-area.component.vue"
          ),
      },
      {
        path: "create-account",
        name: "LoanCreateAccount",
        component: () =>
          import(
            /* webpackChunkName: "loan-create-account" */ "./loan-create-account/loan-create-account.component.vue"
          ),
      },
      {
        path: "rejected-age",
        name: "LoanRejectedAge",
        component: () =>
          import(
            /* webpackChunkName: "loan-rejected-age" */ "./loan-rejected-age/loan-rejected-age.component.vue"
          ),
      },
    ],
  },
];

export default loanRoutes;

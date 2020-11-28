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
        path: "ktp-address",
        name: "LoanKtpAddress",
        component: () =>
          import(
            /* webpackChunkName: "loan-ktp-address" */ "./loan-ktp-address/LoanKtpAddress.vue"
          ),
      },
      {
        path: "ktp-data",
        name: "LoanKtpData",
        component: () =>
          import(
            /* webpackChunkName: "loan-ktp-data" */ "./loan-ktp-data/LoanKtpData.vue"
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
      {
        path: "create-account",
        name: "LoanCreateAccount",
        component: () =>
          import(
            /* webpackChunkName: "loan-create-account" */ "./loan-create-account/LoanCreateAccount.vue"
          ),
      },
    ],
  },
];

export default loanRoutes;

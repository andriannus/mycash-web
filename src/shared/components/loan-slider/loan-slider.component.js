import { computed, defineComponent, reactive } from "vue";

import {
  ADMIN_FEE,
  LOAN_DEFAULT_VALUE,
  LOAN_INTEREST,
} from "./loan-slider.constant";

import MyButton from "@/shared/components/button/button.component.vue";
import MySlider from "@/shared/components/slider/slider.component.vue";
import { ceil } from "@/shared/utils/ceil.util";
import { rupiahCurrency } from "@/shared/utils/rupiah.util";

export default defineComponent({
  name: "LoanSlider",

  components: {
    MyButton,
    MySlider,
  },

  props: {
    borderless: {
      type: Boolean,
      default: false,
    },
    elevated: {
      type: Boolean,
      default: false,
    },
    loanAmount: {
      type: String,
      default: LOAN_DEFAULT_VALUE.amount,
    },
    loanPeriod: {
      type: String,
      default: LOAN_DEFAULT_VALUE.period,
    },
  },

  setup(props) {
    const state = reactive({
      loanAmount: props.loanAmount,
      loanPeriod: props.loanPeriod,
    });

    const installmentInRupiah = computed(() => {
      const loanAmountInMillion = state.loanAmount * 1000000;
      const installmentsPerMonth = loanAmountInMillion / state.loanPeriod;
      const loanInterest = loanAmountInMillion * LOAN_INTEREST;
      const adminFee = loanAmountInMillion * ADMIN_FEE;
      const totalInstallment = installmentsPerMonth + loanInterest + adminFee;

      return rupiahCurrency(ceil(totalInstallment));
    });

    return {
      installmentInRupiah,
      props,
      state,
    };
  },
});

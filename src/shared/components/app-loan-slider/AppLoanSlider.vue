<template>
  <div
    :class="{
      'Card--borderless': props.borderless,
      'Card--elevated': props.elevated,
    }"
    class="LoanSlider Card MarginBottom-base"
  >
    <div class="Card-body">
      <div class="MarginBottom-base">
        <div class="Flex JustifyContent-between">
          <strong>Jumlah Pinjaman</strong>
          <strong class="Color-primary">{{ state.loanAmount }} juta</strong>
        </div>

        <my-slider v-model="state.loanAmount" :max="20" :min="2"></my-slider>

        <div class="Flex JustifyContent-between">
          <span>2 juta</span>
          <span>20 juta</span>
        </div>
      </div>

      <div class="MarginBottom-base">
        <div class="Flex JustifyContent-between">
          <strong>Lama Pinjaman</strong>
          <strong class="Color-primary">{{ state.loanPeriod }} bulan</strong>
        </div>

        <my-slider v-model="state.loanPeriod" :max="20" :min="6"></my-slider>

        <div class="Flex JustifyContent-between">
          <span>6 bulan</span>
          <span>20 bulan</span>
        </div>
      </div>

      <hr />

      <div class="TextAlign-center">
        <p>
          <strong>Cicilan per bulan</strong>
          <br />
          <small class="Color-light-70">
            *sudah termasuk bunga dan biaya admin
          </small>
        </p>

        <p class="MarginBottom-xsmall">
          <strong class="Color-primary FontSize-2xlarge">
            {{ installmentInRupiah }}
          </strong>
        </p>
      </div>

      <my-button full-width color="primary" to="/loan">
        Ajukan Pinjaman
      </my-button>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

import {
  ADMIN_FEE,
  LOAN_DEFAULT_VALUE,
  LOAN_INTEREST,
} from "./app-loan-slider.constant";

import MyButton from "@/shared/components/my-button/MyButton.vue";
import MySlider from "@/shared/components/my-slider/MySlider.vue";
import { ceil } from "@/shared/utils/ceil.util";
import { rupiahCurrency } from "@/shared/utils/rupiah.util";

export default {
  name: "AppLoanSlider",

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
};
</script>

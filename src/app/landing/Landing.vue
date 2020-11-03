<template>
  <my-top-bar></my-top-bar>

  <div class="Container">
    <div class="MarginBottom-base">
      <h1 class="FontSize-large">Ajukan Pinjaman Online Tanpa Jaminan</h1>

      <p class="FontSize-small">
        Hanya dengan KTP, dapatkan keredit tanpa agunan hingga
        <strong>Rp20.000.000</strong>
      </p>
    </div>

    <div class="Card MarginBottom-base">
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
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";

import { PAGE_TITLE } from "./landing.constant";

import MyButton from "@/shared/components/my-button/MyButton.vue";
import MySlider from "@/shared/components/my-slider/MySlider.vue";
import MyTopBar from "@/shared/components/my-top-bar/MyTopBar.vue";
import { useSeo } from "@/shared/services/seo";
import { ceil } from "@/shared/utils/ceil.util";
import { rupiahCurrency } from "@/shared/utils/rupiah.util";

export default {
  name: "Landing",

  components: {
    MyButton,
    MySlider,
    MyTopBar,
  },

  setup() {
    const { setTitle } = useSeo();

    const state = reactive({
      loanAmount: "11",
      loanPeriod: "13",
    });

    const installmentInRupiah = computed(() => {
      const installmentsPerMonth =
        (state.loanAmount * 1000000) / state.loanPeriod;
      const loanInterest = state.loanAmount * 1000000 * 0.026;
      const adminFee = state.loanAmount * 1000000 * 0.0065;

      return rupiahCurrency(
        ceil(installmentsPerMonth) + loanInterest + adminFee,
      );
    });

    onMounted(() => {
      setTitle(PAGE_TITLE);
    });

    return { installmentInRupiah, state };
  },
};
</script>

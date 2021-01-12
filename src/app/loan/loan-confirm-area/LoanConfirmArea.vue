<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Area Layanan</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <div class="TextAlign-center MarginTop-base MarginBottom-base">
        <service-area-icon></service-area-icon>
      </div>

      <p class="MarginBottom-base">
        <strong>Pilih area tempat tinggal Anda di bawah ini!</strong>
      </p>

      <my-radio
        v-model="serviceArea"
        id="RbInsideServiceArea"
        className="MarginBottom-base"
        name="RbServiceArea"
        value="inside"
      >
        <p>
          <strong>Jawa:</strong>
          Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Semarang,
          Yogyakarta, Gresik, Sidoarjo, dan Surabaya.
        </p>

        <p>
          <strong>Sumatera:</strong>
          Medan, Palembang, dan Pekanbaru.
        </p>

        <p>
          <strong>Bali:</strong>
          Denpasar.
        </p>

        <p>
          <strong>Sulawesi:</strong>
          Makassar.
        </p>
      </my-radio>

      <my-radio
        v-model="serviceArea"
        id="RbOutsideServiceArea"
        name="RbServiceArea"
        value="outside"
      >
        Di kota lainnya.
      </my-radio>

      <template #contentFooter>
        <my-button
          color="primary"
          :disabled="hasNotBeenSelected"
          full-width
          @click="onClickNextButton"
        >
          Lanjutkan
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH } from "../loan.constant";
import { LoanFeature, ServiceArea } from "../loan.enum";
import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyRadio from "@/shared/components/my-radio/MyRadio.vue";
import MyTitle from "@/shared/components/my-title/MyTitle.vue";
import MyToolbar from "@/shared/components/my-toolbar/MyToolbar.vue";

export default {
  name: "LoanVentureCapital",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadio,
    MyTitle,
    MyToolbar,
    ServiceAreaIcon,
  },

  setup() {
    const router = useRouter();

    const serviceArea = ref(null);
    const hasNotBeenSelected = computed(() => !serviceArea.value);

    const onClickNextButton = () => {
      const isOutsideServiceArea = serviceArea.value === ServiceArea.Outside;

      if (isOutsideServiceArea) {
        return router.push(LOAN_PAGE_PATH[LoanFeature.OutsideArea]);
      }

      return router.push(LOAN_PAGE_PATH[LoanFeature.CreateAccount]);
    };

    return {
      hasNotBeenSelected,
      onClickNextButton,
      serviceArea,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .Radio-control {
    min-width: 20px;
  }
}
</style>

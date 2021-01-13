<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Alamat KTP</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <template #progress>
        <loan-progress :max="100" :value="pagePercentage"></loan-progress>
      </template>

      <p class="FontSize-small MarginBottom">
        Lengkapi semua data di bawah ini sesuai dengan KTP Anda.
      </p>

      <div class="Grids">
        <div class="Grid">
          <my-text-field id="TxtBlockNumber" label="Nomor Blok"></my-text-field>
        </div>

        <div class="Grid">
          <my-text-field
            id="TxtHouseNumber"
            label="Nomor Rumah"
          ></my-text-field>
        </div>
      </div>

      <div class="Grids">
        <div class="Grid">
          <my-text-field id="TxtRt" label="RT"></my-text-field>
        </div>

        <div class="Grid">
          <my-text-field id="TxtRw" label="RW"></my-text-field>
        </div>
      </div>

      <template #contentFooter>
        <my-button color="primary" full-width>Lanjutkan</my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { LOAN_PAGE_PATH, LOAN_PAGES } from "../loan.constant";
import { LoanFeature } from "../loan.enum";
import LoanProgress from "../shared/components/loan-progress/LoanProgress.vue";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyTextField from "@/shared/components/my-text-field/MyTextField.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default {
  name: "LoanKtpAddress",

  components: {
    LoanProgress,
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyTextField,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const pagePercentage = computed(() => {
      const selectedPage = LOAN_PAGES.find(({ path }) => path === route.path);
      return selectedPage.percentage;
    });

    const onClickNextButton = () => {
      router.push(LOAN_PAGE_PATH[LoanFeature.VentureCapital]);
    };

    return {
      onClickNextButton,
      pagePercentage,
    };
  },
};
</script>

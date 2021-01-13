<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button v-if="setup.isBackButtonShown"></my-back-button>
        <my-title>Data KTP</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <template #progress>
        <loan-progress :max="100" :value="pagePercentage"></loan-progress>
      </template>

      <p class="FontSize-small MarginBottom">
        Lengkapi semua data di bawah ini sesuai dengan KTP Anda.
      </p>

      <my-text-field
        id="TxtKtp"
        :disabled="true"
        label="Nomor KTP (NIK)"
        placeholder="Masukkan nomor KTP kamu"
      ></my-text-field>

      <my-text-field
        id="TxtFullName"
        :disabled="true"
        label="Nama Sesuai KTP"
        placeholder="Masukkan nama kamu"
      ></my-text-field>

      <div class="Field">
        <label class="Field-label">Jenis Kelamin</label>

        <div class="Field-control Flex">
          <my-radio
            id="RbMale"
            className="MarginRight"
            name="Gender"
            value="male"
          >
            Laki-laki
          </my-radio>

          <my-radio id="RbFemale" name="Gender" value="female">
            Perempuan
          </my-radio>
        </div>
      </div>

      <template #contentFooter>
        <my-button color="primary" full-width @click="onClickNextButton">
          Lanjutkan
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { LOAN_PAGE_PATH, LOAN_PAGES } from "../loan.constant";
import { LoanFeature } from "../loan.enum";
import LoanProgress from "../shared/components/loan-progress/LoanProgress.vue";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyRadio from "@/shared/components/radio/radio.component.vue";
import MyTextField from "@/shared/components/my-text-field/MyTextField.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default {
  name: "LoanKtpData",

  components: {
    LoanProgress,
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadio,
    MyTextField,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const setup = reactive({
      isBackButtonShown: false,
    });

    const pagePercentage = computed(() => {
      const selectedPage = LOAN_PAGES.find(({ path }) => path === route.path);
      return selectedPage.percentage;
    });

    const onClickNextButton = () => {
      router.push(LOAN_PAGE_PATH[LoanFeature.KtpAddress]);
    };

    return {
      onClickNextButton,
      pagePercentage,
      setup,
    };
  },
};
</script>

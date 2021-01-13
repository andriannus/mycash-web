<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Tujuan Pinjaman</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <my-radio-group
        v-model="loanPurpose"
        id="RbLoanPurpose"
        :options="options"
      ></my-radio-group>

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

import { LOAN_PAGE_PATH, LOAN_PURPOSE_OPTIONS } from "../loan.constant";
import { LoanFeature } from "../loan.enum";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyRadioGroup from "@/shared/components/radio-group/radio-group.component.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default {
  name: "LoanPurpose",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadioGroup,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const router = useRouter();

    const loanPurpose = ref(null);
    const hasNotBeenSelected = computed(() => !loanPurpose.value);
    const options = LOAN_PURPOSE_OPTIONS;

    const onClickNextButton = () => {
      router.push(LOAN_PAGE_PATH[LoanFeature.VentureCapital]);
    };

    return {
      hasNotBeenSelected,
      loanPurpose,
      onClickNextButton,
      options,
    };
  },
};
</script>

<template>
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
      <my-button color="primary" full-width>
        Lanjutkan
      </my-button>
    </template>
  </my-content>
</template>

<script>
import { ref } from "vue";

import { LOAN_PURPOSE_OPTIONS } from "../loan.constant";

import MyBackButton from "@/shared/components/my-back-button/MyBackButton.vue";
import MyButton from "@/shared/components/my-button/MyButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyRadioGroup from "@/shared/components/my-radio-group/MyRadioGroup.vue";
import MyTitle from "@/shared/components/my-title/MyTitle.vue";
import MyToolbar from "@/shared/components/my-toolbar/MyToolbar.vue";

export default {
  name: "LoanPurpose",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyRadioGroup,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const loanPurpose = ref("");
    const options = LOAN_PURPOSE_OPTIONS;

    return { loanPurpose, options };
  },
};
</script>

import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH } from "../loan.constant";
import { LoanFeature } from "../loan.enum";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyDialog from "@/shared/components/dialog/dialog.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";
import MyTextField from "@/shared/components/text-field/text-field.component.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
  name: "LoanCreateAccount",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyDialog,
    MyHeader,
    MyPage,
    MyTextField,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      isDialogShown: false,
    });

    const toggleDialogShow = () => {
      state.isDialogShown = !state.isDialogShown;
    };

    const onClickNextButton = () => {
      toggleDialogShow();
    };

    const onClickConfirmButton = () => {
      router.push(LOAN_PAGE_PATH[LoanFeature.KtpData]);
    };

    return {
      onClickConfirmButton,
      onClickNextButton,
      state,
      toggleDialogShow,
    };
  },
});

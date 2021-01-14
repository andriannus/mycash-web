import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH } from "../loan.constant";
import { LoanFeature } from "../loan.enum";

import MyBackButton from "@/app/shared/components/back-button/back-button.component.vue";
import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyDialog from "@/app/shared/components/dialog/dialog.component.vue";
import MyHeader from "@/app/shared/components/header/header.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyTextField from "@/app/shared/components/text-field/text-field.component.vue";
import MyTitle from "@/app/shared/components/title/title.component.vue";
import MyToolbar from "@/app/shared/components/toolbar/toolbar.component.vue";

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

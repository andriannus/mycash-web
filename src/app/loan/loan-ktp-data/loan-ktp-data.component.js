import { computed, defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { LOAN_PAGE_PATH, LOAN_PAGES } from "../loan.constant";
import { LoanFeature } from "../loan.enum";
import LoanProgress from "../shared/components/loan-progress/loan-progress.component.vue";

import MyBackButton from "@/app/shared/components/back-button/back-button.component.vue";
import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyHeader from "@/app/shared/components/header/header.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyRadio from "@/app/shared/components/radio/radio.component.vue";
import MyTextField from "@/app/shared/components/text-field/text-field.component.vue";
import MyTitle from "@/app/shared/components/title/title.component.vue";
import MyToolbar from "@/app/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
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
});

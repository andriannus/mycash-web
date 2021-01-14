import { computed, defineComponent, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

import { LOAN_PAGE_PATH, LOAN_PAGES } from "../loan.constant";
import { LoanFeature } from "../loan.enum";
import LoanProgress from "../shared/components/loan-progress/loan-progress.component.vue";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";
import MyRadio from "@/shared/components/radio/radio.component.vue";
import MyTextField from "@/shared/components/text-field/text-field.component.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

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

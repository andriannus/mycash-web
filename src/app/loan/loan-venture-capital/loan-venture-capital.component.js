import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH, VENTURE_CAPITAL_OPTIONS } from "../loan.constant";
import { LoanFeature } from "../loan.enum";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";
import MyRadioGroup from "@/shared/components/radio-group/radio-group.component.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
  name: "LoanVentureCapital",

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
    const options = VENTURE_CAPITAL_OPTIONS;

    const onClickNextButton = () => {
      router.push(LOAN_PAGE_PATH[LoanFeature.ConfirmArea]);
    };

    return {
      hasNotBeenSelected,
      loanPurpose,
      onClickNextButton,
      options,
    };
  },
});

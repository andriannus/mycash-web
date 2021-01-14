import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH, LOAN_PURPOSE_OPTIONS } from "../loan.constant";
import { LoanFeature } from "../loan.enum";

import MyBackButton from "@/app/shared/components/back-button/back-button.component.vue";
import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyHeader from "@/app/shared/components/header/header.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyRadioGroup from "@/app/shared/components/radio-group/radio-group.component.vue";
import MyTitle from "@/app/shared/components/title/title.component.vue";
import MyToolbar from "@/app/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
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
});

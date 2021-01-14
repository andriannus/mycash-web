import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH } from "../loan.constant";
import { LoanFeature, ServiceArea } from "../loan.enum";
import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyBackButton from "@/shared/components/back-button/back-button.component.vue";
import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyHeader from "@/shared/components/header/header.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";
import MyRadio from "@/shared/components/radio/radio.component.vue";
import MyTitle from "@/shared/components/title/title.component.vue";
import MyToolbar from "@/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
  name: "LoanConfirmArea",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadio,
    MyTitle,
    MyToolbar,
    ServiceAreaIcon,
  },

  setup() {
    const router = useRouter();

    const serviceArea = ref(null);
    const hasNotBeenSelected = computed(() => !serviceArea.value);

    const onClickNextButton = () => {
      const isOutsideServiceArea = serviceArea.value === ServiceArea.Outside;

      if (isOutsideServiceArea) {
        return router.push(LOAN_PAGE_PATH[LoanFeature.OutsideArea]);
      }

      return router.push(LOAN_PAGE_PATH[LoanFeature.CreateAccount]);
    };

    return {
      hasNotBeenSelected,
      onClickNextButton,
      serviceArea,
    };
  },
});

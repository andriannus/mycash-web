import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

import { LOAN_PAGE_PATH } from "../loan.constant";
import { LoanFeature, ServiceArea } from "../loan.enum";
import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyBackButton from "@/app/shared/components/back-button/back-button.component.vue";
import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyHeader from "@/app/shared/components/header/header.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyRadio from "@/app/shared/components/radio/radio.component.vue";
import MyTitle from "@/app/shared/components/title/title.component.vue";
import MyToolbar from "@/app/shared/components/toolbar/toolbar.component.vue";

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

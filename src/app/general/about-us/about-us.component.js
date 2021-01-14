import { defineComponent } from "vue";

import GeneralFooter from "../shared/components/general-footer/GeneralFooter.vue";
import EasyAndFastIcon from "../shared/images/easy-and-fast.svg";

import AppApplyLoanButton from "@/shared/components/apply-loan-button/apply-loan-button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";
import MyTopBar from "@/shared/components/top-bar/top-bar.component.vue";

export default defineComponent({
  name: "AboutUs",

  components: {
    AppApplyLoanButton,
    EasyAndFastIcon,
    GeneralFooter,
    MyContent,
    MyPage,
    MyTopBar,
  },
});

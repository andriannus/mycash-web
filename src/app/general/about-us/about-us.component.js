import { defineComponent } from "vue";

import GeneralFooter from "../shared/components/general-footer/general-footer.component.vue";
import EasyAndFastIcon from "../shared/images/easy-and-fast.svg";

import AppApplyLoanButton from "@/app/shared/components/apply-loan-button/apply-loan-button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyTopBar from "@/app/shared/components/top-bar/top-bar.component.vue";

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

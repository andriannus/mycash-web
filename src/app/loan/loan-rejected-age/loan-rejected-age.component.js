import { defineComponent } from "vue";

import RejectedAgeIcon from "../shared/images/rejected-age.svg";

import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";

export default defineComponent({
  name: "LoanRejectedAge",

  components: {
    MyButton,
    MyContent,
    MyPage,
    RejectedAgeIcon,
  },
});

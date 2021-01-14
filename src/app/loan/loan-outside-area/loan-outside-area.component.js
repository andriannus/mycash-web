import { defineComponent } from "vue";

import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyButton from "@/app/shared/components/button/button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";

export default defineComponent({
  name: "LoanOutsideArea",

  components: {
    MyButton,
    MyContent,
    MyPage,
    ServiceAreaIcon,
  },
});

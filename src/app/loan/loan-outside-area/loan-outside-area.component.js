import { defineComponent } from "vue";

import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyButton from "@/shared/components/button/button.component.vue";
import MyContent from "@/shared/components/content/content.component.vue";
import MyPage from "@/shared/components/page/page.component.vue";

export default defineComponent({
  name: "LoanOutsideArea",

  components: {
    MyButton,
    MyContent,
    MyPage,
    ServiceAreaIcon,
  },
});

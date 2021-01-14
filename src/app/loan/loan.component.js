import { computed, defineComponent, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { LOAN_PAGES } from "./loan.constant";

import { useSeo } from "@/app/shared/services/seo";
import MyFadeTransition from "@/app/shared/components/fade-transition/fade-transition.component.vue";

export default defineComponent({
  name: "Loan",

  components: {
    MyFadeTransition,
  },

  setup() {
    const route = useRoute();
    const { setTitle } = useSeo();

    const pathRef = computed(() => route.path);

    const initializePage = () => {
      const currentPage = LOAN_PAGES.find(page => {
        return page.path === pathRef.value;
      });

      if (currentPage) {
        setTitle(currentPage.documentTitle);
      }
    };

    watchEffect(() => {
      initializePage();
    });
  },
});

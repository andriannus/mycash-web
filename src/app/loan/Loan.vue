<template>
  <router-view v-slot="{ Component }">
    <my-fade-transition>
      <component :is="Component"></component>
    </my-fade-transition>
  </router-view>
</template>

<script>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { LOAN_PAGES } from "./loan.constant";

import { useSeo } from "@/shared/services/seo";
import MyFadeTransition from "@/shared/components/fade-transition/fade-transition.component.vue";

export default {
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
};
</script>

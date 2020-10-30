<template>
  <router-view v-slot="{ Component }">
    <my-fade-transition>
      <component :is="Component"></component>
    </my-fade-transition>
  </router-view>
</template>

<script>
import MyFadeTransition from "@/shared/transitions/MyFadeTransition.vue";

export default {
  name: "Loan",

  components: {
    MyFadeTransition,
  },
};
</script>

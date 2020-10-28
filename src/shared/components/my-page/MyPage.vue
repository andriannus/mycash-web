<template>
  <div class="MyPage">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";

export default {
  name: "MyPage",

  setup() {
    const body = document.getElementById("app");

    const addBgColorToApp = () => {
      body.classList.add("BgColor-light");
    };

    const removeBgColorToApp = () => {
      body.classList.remove("BgColor-light");
    };

    onMounted(() => {
      addBgColorToApp();
    });

    onUnmounted(() => {
      removeBgColorToApp();
    });
  },
};
</script>

<style lang="scss" scoped>
.MyPage {
  background-color: #ffffff;
  margin: auto;
  max-width: 480px;
}
</style>

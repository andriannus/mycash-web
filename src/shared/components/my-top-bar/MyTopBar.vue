<template>
  <div class="TopBar">
    <router-link class="TopBar-logo" to="/">
      <tunaiku-icon></tunaiku-icon>
    </router-link>
  </div>
</template>

<script>
import TunaikuIcon from "@/shared/images/svg/tunaiku-logo.svg";

export default {
  name: "MyTopBar",

  components: {
    TunaikuIcon,
  },
};
</script>

<style lang="scss" scoped>
.TopBar {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>

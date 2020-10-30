<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "MyFadeTransition",
};
</script>

<style lang="scss" scoped>
.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>

<template>
  <transition name="Fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "MyFadeTransition",
};
</script>

<style lang="scss" scoped>
.Fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>

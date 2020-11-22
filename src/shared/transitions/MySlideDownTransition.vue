<template>
  <transition name="SlideDown">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "MySlideDownTransition",
};
</script>

<style lang="scss" scoped>
.SlideDown {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-in-out;
  }

  &-enter-from,
  &-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>

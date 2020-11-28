<template>
  <transition name="Bounce">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "MyBounceTransition",
};
</script>

<style lang="scss" scoped>
.Bounce {
  &-enter-active {
    animation: BounceIn 0.3s;
  }

  &-leave-active {
    animation: BounceIn 0.3s reverse;
  }
}

@keyframes BounceIn {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>

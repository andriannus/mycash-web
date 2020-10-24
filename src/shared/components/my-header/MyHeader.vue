<template>
  <div class="Header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style lang="scss" scoped>
.Header {
  display: inline-flex;
  left: 0;
  min-width: 100vw;
  position: fixed;
  top: 0;
}
</style>

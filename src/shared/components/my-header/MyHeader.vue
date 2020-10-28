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
  min-width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>

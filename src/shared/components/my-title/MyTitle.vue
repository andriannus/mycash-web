<template>
  <span class="MyTitle">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "MyTitle",
};
</script>

<style lang="scss" scoped>
.MyTitle {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 28px;
}
</style>

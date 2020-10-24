<template>
  <nav :class="toolbarColor" class="MyToolbar">
    <slot></slot>
  </nav>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyToolbar",
  props: {
    color: {
      type: String,
      default: "info",
    },
  },

  setup(props) {
    const toolbarColor = computed(() => `BgColor-${props.color}`);

    return { toolbarColor };
  },
};
</script>

<style lang="scss" scoped>
.MyToolbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  padding: 14px 16px;
  width: 100%;

  *:not(:last-child) {
    margin-right: 16px;
  }

  *:nth-child(2) {
    flex-grow: 1;
    text-align: left;
  }
}
</style>

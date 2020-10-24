<template>
  <div
    :class="{
      'MyContent--hasToolbar': hasToolbar,
    }"
    class="MyContent Flex Flex-column JustifyContent-spaceBetween"
  >
    <div
      v-if="hasContentHeader"
      :class="[
        {
          [`PaddingRight-${padding}`]: hasPadding,
        },
        {
          [`PaddingTop-${padding}`]: hasPadding,
        },
        {
          [`PaddingLeft-${padding}`]: hasPadding,
        },
      ]"
      class="MyContent-header"
    >
      <slot name="contentHeader"></slot>
    </div>

    <div
      :class="{
        [`Padding-${padding}`]: hasPadding,
      }"
      class="MyContent-body"
    >
      <slot></slot>
    </div>

    <div
      v-if="hasContentFooter"
      :class="[
        {
          [`PaddingRight-${padding}`]: hasPadding,
        },
        {
          [`PaddingBottom-${padding}`]: hasPadding,
        },
        {
          [`PaddingLeft-${padding}`]: hasPadding,
        },
      ]"
      class="MyContent-footer"
    >
      <slot name="contentFooter"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyContent",

  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },

    hasToolbar: {
      type: Boolean,
      default: true,
    },

    padding: {
      type: String,
      default: "base",
    },
  },

  setup(props, { slots }) {
    const hasContentFooter = computed(() => !!slots.contentFooter);
    const hasContentHeader = computed(() => !!slots.contentHeader);
    const hasPadding = computed(() => !!props.padding);

    return {
      hasContentFooter,
      hasContentHeader,
      hasPadding,
    };
  },
};
</script>

<style lang="scss" scoped>
.MyContent {
  min-height: 100vh;

  &-body {
    flex-grow: 1;
  }

  &--hasToolbar {
    min-height: calc(100vh - 56px);
    margin-top: 56px;
  }
}
</style>

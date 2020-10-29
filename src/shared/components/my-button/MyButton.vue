<template>
  <router-link v-if="isLink" :class="buttonClassNames" :to="to">
    <slot></slot>
  </router-link>

  <button
    v-else
    :class="buttonClassNames"
    :disabled="disabled"
    :type="type"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyButton",

  props: {
    className: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },

  setup(props, { emit }) {
    const hasColor = computed(() => !!props.color);
    const isLink = computed(() => !!props.to);

    const buttonClassNames = [
      {
        [`Button--${props.color}`]: hasColor,
      },
      {
        "Button--fullWidth": props.fullWidth,
      },
      {
        "Button--outlined": props.outlined,
      },
      ...(props.className && props.className),
      `Button`,
    ];

    return { buttonClassNames, emit, isLink };
  },
};
</script>

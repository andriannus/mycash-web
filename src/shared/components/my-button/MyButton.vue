<template>
  <router-link v-if="isLink" :class="buttonClassNames" :to="to">
    <slot></slot>
  </router-link>

  <button
    v-else
    :class="buttonClassNames"
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
    color: {
      type: String,
      default: "",
    },

    fullWidth: {
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
      `Button`,
    ];

    return { buttonClassNames, emit, isLink };
  },
};
</script>

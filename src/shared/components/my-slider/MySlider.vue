<template>
  <input
    id="Slider"
    :class="[hasClassName && className]"
    class="Slider"
    :max="max"
    :min="min"
    :name="name"
    :step="step"
    type="range"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script>
import { computed } from "vue";

export default {
  name: "MySlider",

  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      defualt: "",
    },
    max: {
      type: Number,
      default: 10,
    },
    min: {
      type: Number,
      default: 0,
    },
    modelValue: {
      type: [Number, String],
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    step: {
      type: Number,
      default: 1,
    },
  },

  setup(props, { emit }) {
    const hasClassName = computed(() => !!props.className);

    const onInput = $emit => emit("update:modelValue", $emit.target.value);

    return { hasClassName, onInput };
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/color/color";

.Slider {
  appearance: none;
  background-color: $amb-neutral;
  border-radius: 5px;
  height: 5px;
  opacity: 0.7;
  outline: none;
  transition: opacity 0.2s;
  width: 100%;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-slider-thumb {
    appearance: none;
  }

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    background-color: $amb-primary;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }
}
</style>

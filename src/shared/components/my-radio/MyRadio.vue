<template>
  <div :class="[hasClassName ? className : '']" class="Radio">
    <input
      :id="id"
      class="Radio-control"
      :name="name"
      type="radio"
      :value="modelValue"
      @change="onChange"
    />

    <label class="Radio-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyRadio",

  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "Rb",
    },
    modelValue: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "Rb",
    },
    value: {
      type: String,
      default: null,
    },
  },

  setup(props, { emit }) {
    const hasClassName = computed(() => !!props.className);

    const onChange = () => emit("update:modelValue", props.value);

    return { hasClassName, onChange };
  },
};
</script>

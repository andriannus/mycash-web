<template>
  <div :class="[hasClassName ? className : '']" class="Radio">
    <input
      :id="id"
      class="Radio-control"
      :name="name"
      type="radio"
      :value="value"
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
      default: "",
    },
    name: {
      type: String,
      default: "Rb",
    },
    value: {
      type: [String, Boolean],
      default: null,
    },
  },

  setup(props, { emit }) {
    const hasClassName = computed(() => !!props.className);
    const onChange = $event => emit("input", $event.target.value);

    return { hasClassName, onChange };
  },
};
</script>

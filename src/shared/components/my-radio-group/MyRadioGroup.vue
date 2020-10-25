<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    class="Radio MarginBottom-base"
  >
    <input
      :id="id + index"
      class="Radio-control"
      :name="id"
      :value="option.value"
      type="radio"
      @change="onChange"
    />

    <label class="Radio-label" :for="id + index">
      {{ option.text }}
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "MyRadioGroup",

  props: {
    id: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: String,
      default: "",
    },
  },

  setup(_, { emit }) {
    const onChange = $event => emit("input", $event.target.value);

    return { onChange };
  },
};
</script>

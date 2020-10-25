<template>
  <div class="Radio">
    <input
      :id="id"
      class="Radio-control"
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
export default {
  name: "MyRadio",

  props: {
    id: {
      type: String,
      default: "",
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

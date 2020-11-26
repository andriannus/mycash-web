<template>
  <div class="Field MarginBottom">
    <label
      v-if="isLabelExist"
      :class="{ 'Color-danger': isErrorExist }"
      class="Field-label"
      :for="id"
    >
      {{ label }}
    </label>

    <div class="Field-control">
      <input
        :id="id"
        :class="{ 'Input--danger': isErrorExist }"
        class="Input"
        :placeholder="placeholder"
        :type="type"
        @input="onInput"
      />
    </div>

    <div v-if="isErrorExist" class="Field-helper Color-danger">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MyTextField",

  props: {
    errors: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },

  setup(props, { emit }) {
    const isErrorExist = computed(() => props.errors.length > 0);
    const isLabelExist = computed(() => !!props.label);

    const onInput = event => {
      emit("update:modelValue", event.target.value);
    };

    return { isErrorExist, isLabelExist, onInput };
  },
};
</script>

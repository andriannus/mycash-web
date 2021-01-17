import { defineComponent } from "vue";

export default defineComponent({
  name: "RadioGroup",
  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default: "RbGroup",
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    modelValue: {
      type: String,
      default: null,
    },
  },

  setup(_, { emit }) {
    const onChange = $event => emit("update:modelValue", $event.target.value);

    return { onChange };
  },
});

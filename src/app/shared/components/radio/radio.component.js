import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Radio",

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
});

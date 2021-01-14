import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Slider",

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
});

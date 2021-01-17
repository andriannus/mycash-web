import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TextField",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Array,
      default: () => {
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
});

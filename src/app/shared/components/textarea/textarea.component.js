import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Textarea",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
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
    noResize: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 3,
    },
  },

  setup(props, { emit }) {
    const isErrorExist = computed(() => props.errors.length > 0);
    const isLabelExist = computed(() => !!props.label);
    const resize = computed(() => (props.noResize ? "none" : "vertical"));

    const onInput = event => {
      emit("update:modelValue", event.target.value);
    };

    return { isErrorExist, isLabelExist, onInput, resize };
  },
});

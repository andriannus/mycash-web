import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Select",

  props: {
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
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const isErrorExist = computed(() => props.errors.length > 0);
    const isLabelExist = computed(() => !!props.label);

    const isSelected = option => {
      return option === props.value;
    };

    const selectOption = option => {
      emit("update:modelValue", option);
    };

    return {
      isErrorExist,
      isLabelExist,
      isSelected,
      selectOption,
    };
  },
});

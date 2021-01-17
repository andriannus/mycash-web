import { computed, defineComponent, onMounted } from "vue";
import flatpickr from "flatpickr";
import { Indonesian } from "flatpickr/dist/l10n/id";

export default defineComponent({
  name: "DateField",

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
  },

  setup(props, { emit }) {
    const isErrorExist = computed(() => props.errors.length > 0);
    const isLabelExist = computed(() => !!props.label);

    onMounted(() => {
      flatPickrInit();
    });

    const onInput = event => {
      emit("update:modelValue", event.target.value);
    };

    const flatPickrInit = () => {
      const options = {
        altFormat: "j F Y",
        altInput: true,
        dateFormat: "Y-m-d",
        locale: Indonesian,
      };

      flatpickr(`#${props.id}`, options);
    };

    return { isErrorExist, isLabelExist, onInput };
  },
});

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Content",

  props: {
    className: {
      type: String,
      default: "",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    hasToolbar: {
      type: Boolean,
      default: true,
    },
    padding: {
      type: String,
      default: "base",
    },
  },

  setup(props, { slots }) {
    const hasClassName = computed(() => !!props.className);
    const hasContentFooter = computed(() => !!slots.contentFooter);
    const hasContentHeader = computed(() => !!slots.contentHeader);
    const hasPadding = computed(() => !!props.padding);
    const hasProgress = computed(() => !!slots.progress);

    return {
      hasClassName,
      hasContentFooter,
      hasContentHeader,
      hasPadding,
      hasProgress,
      props,
    };
  },
});

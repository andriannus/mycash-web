import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Button",

  props: {
    className: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
  },

  setup(props, { emit }) {
    const hasColor = computed(() => !!props.color);
    const isLink = computed(() => !!props.to);

    const buttonClassNames = [
      {
        [`Button--${props.color}`]: hasColor,
      },
      {
        "Button--fullWidth": props.fullWidth,
      },
      {
        "Button--outlined": props.outlined,
      },
      {
        "Button--text": props.text,
      },
      props.className && props.className,
      `Button`,
    ];

    return { buttonClassNames, emit, isLink };
  },
});

import { defineComponent } from "vue";

export default defineComponent({
  name: "CloseButton",

  props: {
    color: {
      type: String,
      default: "light",
    },
  },

  setup(props, { emit }) {
    const buttonColor = [props.color && `Color-${props.color}`, "CloseButton"];

    return { buttonColor, emit };
  },
});

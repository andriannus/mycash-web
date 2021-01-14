import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Toolbar",

  props: {
    color: {
      type: String,
      default: "info",
    },
  },

  setup(props) {
    const toolbarColor = computed(() => `BgColor-${props.color}`);

    return { toolbarColor };
  },
});

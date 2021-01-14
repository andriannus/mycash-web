import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "BackButton",

  props: {
    color: {
      type: String,
      default: "light",
    },
    to: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const router = useRouter();

    const buttonColor = computed(() => `Color-${props.color}`);
    const hasLink = computed(() => !!props.to);

    const onClickButton = () => {
      if (hasLink.value) {
        return router.replace(props.to);
      }

      router.back();
    };

    return { buttonColor, onClickButton };
  },
});

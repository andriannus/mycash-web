import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "Page",

  props: {
    className: {
      type: String,
      default: "",
    },
    popUpWindow: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const body = document.getElementById("app");

    const pageClassNames = [props.className && props.className, "MyPage"];

    const addBgColorToApp = () => {
      body.classList.add("BgColor-light");
    };

    const removeBgColorToApp = () => {
      body.classList.remove("BgColor-light");
    };

    onMounted(() => {
      if (!props.popUpWindow) {
        addBgColorToApp();
      }
    });

    onUnmounted(() => {
      if (!props.popUpWindow) {
        removeBgColorToApp();
      }
    });

    return { pageClassNames };
  },
});

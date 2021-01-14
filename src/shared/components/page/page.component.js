import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "Page",

  setup() {
    const body = document.getElementById("app");

    const addBgColorToApp = () => {
      body.classList.add("BgColor-light");
    };

    const removeBgColorToApp = () => {
      body.classList.remove("BgColor-light");
    };

    onMounted(() => {
      addBgColorToApp();
    });

    onUnmounted(() => {
      removeBgColorToApp();
    });
  },
});

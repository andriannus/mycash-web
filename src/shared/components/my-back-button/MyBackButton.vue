<template>
  <button :class="buttonColor" class="MyBackButton" @click="onClickButton">
    <my-icon icon="arrow-left"></my-icon>
  </button>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";

export default {
  name: "MyBackButton",

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
};
</script>

<style lang="scss" scoped>
.MyBackButton {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  height: 24px;
  justify-content: center;
  width: 24px;
}
</style>

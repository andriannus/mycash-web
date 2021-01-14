import { defineComponent, onUnmounted, reactive, watch } from "vue";

import { CLIP_CLASS } from "./dialog.constant";

import MyBounceTransition from "@/app/shared/components/bounce-transition/bounce-transition.component.vue";

export default defineComponent({
  name: "Dialog",

  components: {
    MyBounceTransition,
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const state = reactive({
      html: document.querySelector("html"),
    });

    onUnmounted(() => {
      removeClipClass();
    });

    watch(
      () => props.modelValue,
      value => {
        if (value) {
          return addClipClass();
        }

        removeClipClass();
      },
    );

    const hasClipClass = () => {
      return state.html.classList.contains(CLIP_CLASS);
    };

    const addClipClass = () => {
      if (!hasClipClass()) {
        state.html.classList.add(CLIP_CLASS);
      }
    };

    const removeClipClass = () => {
      if (hasClipClass()) {
        state.html.classList.remove(CLIP_CLASS);
      }
    };
  },
});

<template>
  <teleport to="body">
    <my-bounce-transition>
      <div v-if="modelValue" class="Dialog">
        <div class="Dialog-backdrop"></div>

        <div class="Dialog-box">
          <div class="Dialog-block">
            <slot></slot>
          </div>
        </div>
      </div>
    </my-bounce-transition>
  </teleport>
</template>

<script>
import { onUnmounted, reactive, watch } from "vue";

import { CLIP_CLASS } from "./my-dialog.constant";

import MyBounceTransition from "@/shared/transitions/MyBounceTransition.vue";

export default {
  name: "MyDialog",

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
};
</script>

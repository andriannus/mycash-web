import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

import MySlideUpTransition from "@/shared/transitions/MySlideUpTransition.vue";
import { scrollToElement } from "@/shared/utils/scroll";

export default {
  name: "ApplyLoanButton",

  components: {
    MySlideUpTransition,
  },

  setup() {
    const router = useRouter();
    const isShowApplyLoanButton = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", toggleApplyLoanButton);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", toggleApplyLoanButton);
    });

    const toggleApplyLoanButton = () => {
      const { body, documentElement } = document;
      const isValidBody = body.scrollTop > 300;
      const isValidDocumentElement = documentElement.scrollTop > 300;

      isShowApplyLoanButton.value = isValidBody || isValidDocumentElement;
    };

    const onClickButton = () => {
      const loanSlider = document.querySelector(".LoanSlider");

      if (loanSlider) {
        return scrollToElement(".LoanSlider", {
          behavior: "smooth",
        });
      }

      router.push("/");
    };

    return { isShowApplyLoanButton, onClickButton };
  },
};

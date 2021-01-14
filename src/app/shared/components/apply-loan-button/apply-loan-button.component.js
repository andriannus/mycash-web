import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

import MySlideUpTransition from "@/app/shared/components/slide-up-transition/slide-up-transition.component.vue";
import { scrollToElement } from "@/app/shared/utils/scroll";

export default defineComponent({
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
});

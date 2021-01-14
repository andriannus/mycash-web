import { defineComponent, onMounted } from "vue";

import { PAGE_TITLE } from "./landing.constant";
import LandingAchieved from "./shared/components/landing-achieved/LandingAchieved.vue";
import LandingAdvantages from "./shared/components/landing-advantages/LandingAdvantages.vue";
import LandingCost from "./shared/components/landing-cost/LandingCost.vue";
import LandingDownload from "./shared/components/landing-download/LandingDownload.vue";
import LandingServiceArea from "./shared/components/landing-service-area/LandingServiceArea.vue";
import LandingSteps from "./shared/components/landing-steps/LandingSteps.vue";
import LandingTermsLoan from "./shared/components/landing-terms-loan/LandingTermsLoan.vue";
import LandingTestimonial from "./shared/components/landing-testimonial/LandingTestimonial.vue";

import AppApplyLoanButton from "@/shared/components/apply-loan-button/apply-loan-button.component.vue";
import AppLoanSlider from "@/shared/components/loan-slider/loan-slider.component.vue";
import MyTopBar from "@/shared/components/top-bar/top-bar.component.vue";
import { useSeo } from "@/shared/services/seo";

export default defineComponent({
  name: "Landing",

  components: {
    AppApplyLoanButton,
    AppLoanSlider,
    LandingAchieved,
    LandingAdvantages,
    LandingCost,
    LandingDownload,
    LandingServiceArea,
    LandingSteps,
    LandingTermsLoan,
    LandingTestimonial,
    MyTopBar,
  },

  setup() {
    const { setTitle } = useSeo();

    onMounted(() => {
      setTitle(PAGE_TITLE);
    });
  },
});

import { defineComponent, onMounted } from "vue";

import { PAGE_TITLE } from "./landing.constant";
import LandingAchieved from "./shared/components/landing-achieved/landing-achieved.component.vue";
import LandingAdvantages from "./shared/components/landing-advantages/landing-advantages.component.vue";
import LandingCost from "./shared/components/landing-cost/landing-cost.component.vue";
import LandingDownload from "./shared/components/landing-download/landing-download.component.vue";
import LandingServiceArea from "./shared/components/landing-service-area/landing-service-area.component.vue";
import LandingSteps from "./shared/components/landing-steps/landing-steps.component.vue";
import LandingTermsLoan from "./shared/components/landing-terms-loan/landing-terms-loan.component.vue";
import LandingTestimonial from "./shared/components/landing-testimonial/landing-testimonial.component.vue";

import AppApplyLoanButton from "@/app/shared/components/apply-loan-button/apply-loan-button.component.vue";
import AppLoanSlider from "@/app/shared/components/loan-slider/loan-slider.component.vue";
import MyTopBar from "@/app/shared/components/top-bar/top-bar.component.vue";
import { useSeo } from "@/app/shared/services/seo";

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

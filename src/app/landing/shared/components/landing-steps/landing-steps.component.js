import { defineComponent } from "vue";

import { APPLY_LOAN_STEPS } from "./landing-steps.constant";
import StepsIllustrationIcon from "../../images/steps-illustration.svg";

export default defineComponent({
  name: "LandingSteps",

  components: {
    StepsIllustrationIcon,
  },

  setup() {
    const steps = APPLY_LOAN_STEPS;

    return { steps };
  },
});

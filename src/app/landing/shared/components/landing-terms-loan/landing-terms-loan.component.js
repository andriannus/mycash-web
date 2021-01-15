import { defineComponent } from "vue";

import { APPLYING_LOAN_TERMS } from "./landing-terms-loan.constant";
import TermsIllustrationIcon from "../../images/terms-illustration.svg";

export default defineComponent({
  name: "LandingTermsLoan",

  components: {
    TermsIllustrationIcon,
  },

  setup() {
    const terms = APPLYING_LOAN_TERMS;

    return { terms };
  },
});

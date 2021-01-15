import { defineComponent } from "vue";

import AdminFeeIcon from "../../images/admin-fee.svg";
import EarlyFeeIcon from "../../images/early-fee.svg";
import InterestRateIcon from "../../images/interest-rate.svg";
import LateFeeIcon from "../../images/late-fee.svg";

export default defineComponent({
  name: "LandingCost",

  components: {
    AdminFeeIcon,
    EarlyFeeIcon,
    InterestRateIcon,
    LateFeeIcon,
  },
});

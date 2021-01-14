import { defineComponent } from "vue";

import {
  OTHER_LINKS,
  PRODUCT_LINKS,
  SOCIAL_MEDIAS,
  TUNAIKU_LINKS,
} from "./general-footer.constant";
import AmarBankIcon from "../../images/amar-bank.svg";
import OjkIcon from "../../images/ojk.svg";

export default defineComponent({
  name: "GeneralFooter",

  components: {
    AmarBankIcon,
    OjkIcon,
  },

  setup() {
    const otherLinks = OTHER_LINKS;
    const productLinks = PRODUCT_LINKS;
    const socialMedias = SOCIAL_MEDIAS;
    const tunaikuLinks = TUNAIKU_LINKS;

    return {
      otherLinks,
      productLinks,
      socialMedias,
      tunaikuLinks,
    };
  },
});

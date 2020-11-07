<template>
  <my-top-bar></my-top-bar>

  <div class="Container">
    <div class="Grids">
      <div class="Grid Grid-12 Grid-sm-12 Grid-md-7 Grid-lg-8 Landing-hero">
        <h1>Ajukan Pinjaman Online Tanpa Jaminan</h1>

        <p>
          Hanya dengan KTP, dapatkan keredit tanpa agunan hingga
          <strong>Rp20.000.000</strong>
        </p>
      </div>

      <div class="Grid Grid-12 Grid-sm-12 Grid-md-5 Grid-lg-4">
        <app-loan-slider :borderless="true" :elevated="true"></app-loan-slider>
      </div>
    </div>
  </div>

  <landing-achieved></landing-achieved>
  <landing-testimonial></landing-testimonial>
  <landing-download></landing-download>
  <landing-advantages></landing-advantages>
  <landing-terms-loan></landing-terms-loan>
  <landing-steps></landing-steps>
  <landing-service-area></landing-service-area>
  <landing-cost></landing-cost>
</template>

<script>
import { onMounted } from "vue";

import { PAGE_TITLE } from "./landing.constant";
import LandingAchieved from "./shared/components/landing-achieved/LandingAchieved.vue";
import LandingAdvantages from "./shared/components/landing-advantages/LandingAdvantages.vue";
import LandingCost from "./shared/components/landing-cost/LandingCost.vue";
import LandingDownload from "./shared/components/landing-download/LandingDownload.vue";
import LandingServiceArea from "./shared/components/landing-service-area/LandingServiceArea.vue";
import LandingSteps from "./shared/components/landing-steps/LandingSteps.vue";
import LandingTermsLoan from "./shared/components/landing-terms-loan/LandingTermsLoan.vue";
import LandingTestimonial from "./shared/components/landing-testimonial/LandingTestimonial.vue";

import AppLoanSlider from "@/shared/components/app-loan-slider/AppLoanSlider.vue";
import MyTopBar from "@/shared/components/my-top-bar/MyTopBar.vue";
import { useSeo } from "@/shared/services/seo";

export default {
  name: "Landing",

  components: {
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
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/responsive/scss/mixins";

.Landing {
  &-hero {
    @include amb-responsive-media("xs") {
      margin-bottom: 1rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.75rem;
      }
    }

    @include amb-responsive-media("sm") {
      h1 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1rem;
      }
    }

    @include amb-responsive-media("md") {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    @include amb-responsive-media("lg") {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }
}
</style>

<template>
  <div class="Container PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="TextAlign-center MarginBottom-large">
      <p class="FontSize-large">
        Langkah Mengajukan Pinjaman di Tunaiku
      </p>
    </div>

    <div class="Grids Flex AlignItems-center">
      <div class="Grid Grid-12 Grid-sm-12 Grid-md-12 Grid-lg-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="LandingSteps-list"
        >
          <div class="Flex">
            <span class="LandingSteps-number Color-info">
              {{ index + 1 }}
            </span>

            <p>
              <strong>{{ step.title }}</strong>
            </p>
          </div>

          <div class="MarginLeft-large TextAlign-justify">
            <span class="FontSize-small Color-light-80">
              {{ step.description }}
            </span>
          </div>
        </div>
      </div>

      <div
        class="LandingSteps-illustration Grid Grid-12 Grid-sm-12 Grid-md-12 Grid-lg-6"
      >
        <steps-illustration-icon></steps-illustration-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { APPLY_LOAN_STEPS } from "./landing-steps.constant";
import StepsIllustrationIcon from "../../images/steps-illustration.svg";

export default {
  name: "LandingSteps",

  components: {
    StepsIllustrationIcon,
  },

  setup() {
    const steps = APPLY_LOAN_STEPS;

    return { steps };
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/color/scss/variables";
@import "@amar-ui-web/responsive/scss/mixins";

.LandingSteps {
  &-list {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &-number {
    border: 1px solid $amb-info;
    border-radius: 50%;
    height: 1.75rem;
    margin-right: 0.5rem;
    text-align: center;
    width: 1.75rem;
  }

  @include amb-responsive-media("xs") {
    &-illustration {
      display: none;
    }

    &-list {
      margin-right: 0;
    }
  }

  @include amb-responsive-media("lg") {
    &-illustration {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    &-list {
      margin-right: 1rem;
    }
  }
}
</style>

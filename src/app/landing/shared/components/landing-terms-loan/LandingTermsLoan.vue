<template>
  <div class="BgColor-info PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="Container">
      <div class="TextAlign-center MarginBottom-large">
        <p class="FontSize-large">
          Syarat Mengajukan Pinjaman
        </p>
      </div>

      <div class="Grids">
        <div class="LandingTermsLoan-illustration Grid TextAlign-center">
          <terms-illustration-icon></terms-illustration-icon>
        </div>

        <div class="Grid Flex AlignItems-center JustifyContent-center">
          <ul class="LandingTermsLoan-list">
            <li
              v-for="term in terms"
              :key="term"
              class="Flex AlignItems-center"
            >
              <my-icon
                class="MarginRight-base"
                :icon="['far', 'check-circle']"
                size="lg"
              ></my-icon>

              {{ term }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APPLYING_LOAN_TERMS } from "./landing-terms-loan.constant";
import TermsIllustrationIcon from "../../images/terms-illustration.svg";

export default {
  name: "LandingTermsLoan",

  components: {
    TermsIllustrationIcon,
  },

  setup() {
    const terms = APPLYING_LOAN_TERMS;

    return { terms };
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/responsive/scss/mixins";

.LandingTermsLoan {
  &-list {
    li {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  @include amb-responsive-media("xs") {
    text-align: center;

    &-illustration {
      display: none;
    }
  }

  @include amb-responsive-media("md") {
    &-illustration {
      display: block;
    }
  }
}
</style>

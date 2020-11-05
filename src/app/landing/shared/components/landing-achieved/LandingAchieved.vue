<template>
  <div class="BgColor-light-20 PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="Container">
      <div class="Grids">
        <div class="LandingAchieved Grid Grid-12 Grid-sm-12 Grid-md-6">
          <div class="LandingAchieved-card">
            <income-icon></income-icon>

            <div class="MarginLeft-base">
              <p class="FontSize-large">
                > 4 Triliun Rupiah
              </p>

              <span class="Color-light-60">
                Pembiayaan yang telah disalurkan
              </span>
            </div>
          </div>
        </div>

        <div class="LandingAchieved Grid Grid-12 Grid-sm-12 Grid-md-6">
          <div class="LandingAchieved-card">
            <smartphone-icon></smartphone-icon>

            <div class="MarginLeft-base">
              <p class="FontSize-large">
                > 4,6 Juta Pengguna
              </p>

              <span class="Color-light-60">
                Mengunduh aplikasi Tunaiku
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IncomeIcon from "../../images/income.svg";
import SmartphoneIcon from "../../images/smartphone.svg";

export default {
  name: "LandingAchieved",

  components: {
    IncomeIcon,
    SmartphoneIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/responsive/scss/mixins";

.LandingAchieved {
  &-card {
    align-items: center;
    display: flex;
  }

  @include amb-responsive-media("xs") {
    &-card {
      justify-content: left;
      padding: 0 1rem;
    }

    &:first-child {
      padding-bottom: 1rem;
    }

    &:last-child {
      padding-top: 1rem;
    }
  }

  @include amb-responsive-media("md") {
    &-card {
      justify-content: center;
    }

    &:first-child {
      padding-bottom: 0;
    }

    &:last-child {
      padding-top: 0;
    }
  }
}
</style>

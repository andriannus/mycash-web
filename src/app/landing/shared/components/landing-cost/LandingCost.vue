<template>
  <div class="BgColor-light-20 PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="Container">
      <div class="TextAlign-center MarginBottom-large">
        <p class="FontSize-large">
          Suku Bunga dan Biaya Lainnya
        </p>
      </div>

      <div class="Grids">
        <div class="LandingCost-card Grid Grid-12 Grid-sm-12 Grid-lg-3">
          <admin-fee-icon class="LandingCost-icon"></admin-fee-icon>

          <div class="LandingCost-content">
            <p>Biaya Administrasi</p>
            <strong>Rp540.000</strong>
          </div>
        </div>

        <div class="LandingCost-card Grid Grid-12 Grid-sm-12 Grid-lg-3">
          <interest-rate-icon class="LandingCost-icon"></interest-rate-icon>

          <div class="LandingCost-content">
            <p>Suku Bunga</p>
            <strong>3-4% per bulan</strong>
          </div>
        </div>

        <div class="LandingCost-card Grid Grid-12 Grid-sm-12 Grid-lg-3">
          <early-fee-icon class="LandingCost-icon"></early-fee-icon>

          <div class="LandingCost-content">
            <p>Biaya Pelunasan Lebih Awal</p>
            <strong>GRATIS</strong>
          </div>
        </div>

        <div class="LandingCost-card Grid Grid-12 Grid-sm-12 Grid-lg-3">
          <late-fee-icon class="LandingCost-icon"></late-fee-icon>

          <div class="LandingCost-content">
            <p>Denda Keterlambatan</p>
            <strong>Rp150.000 per bulan</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminFeeIcon from "../../images/admin-fee.svg";
import EarlyFeeIcon from "../../images/early-fee.svg";
import InterestRateIcon from "../../images/interest-rate.svg";
import LateFeeIcon from "../../images/late-fee.svg";

export default {
  name: "LandingCost",

  components: {
    AdminFeeIcon,
    EarlyFeeIcon,
    InterestRateIcon,
    LateFeeIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/color/scss/variables";
@import "@amar-ui-web/responsive/scss/mixins";

.LandingCost {
  @include amb-responsive-media("xs") {
    &-card {
      display: flex;

      &:last-child {
        align-items: center;
      }

      &:not(:last-child) {
        margin-bottom: 1rem;

        .LandingCost-content {
          border-bottom: 1px solid $amb-neutral-60;
          padding-bottom: 1rem;
        }
      }
    }

    &-content {
      flex-grow: 1;
      margin-left: 1rem;
    }

    &-icon {
      margin-bottom: 0;
    }
  }

  @include amb-responsive-media("lg") {
    &-card {
      display: block;
      margin: 0;
      text-align: center;

      &:not(:last-child) {
        margin-bottom: 0;

        .LandingCost-content {
          border-bottom: none;
          padding-bottom: 1rem;
        }
      }
    }

    &-content {
      margin-left: 0;
    }

    &-icon {
      margin-bottom: 1rem;
    }
  }
}
</style>

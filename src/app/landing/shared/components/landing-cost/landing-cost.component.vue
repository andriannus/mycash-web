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

<script src="./landing-cost.component.js"></script>
<style lang="scss" scoped src="./landing-cost.component.scss"></style>

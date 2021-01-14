<template>
  <my-top-bar></my-top-bar>

  <div class="Container MarginTop-base">
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

  <app-apply-loan-button></app-apply-loan-button>
</template>

<script src="./landing.component.js"></script>
<style lang="scss" scoped src="./landing.component.scss"></style>

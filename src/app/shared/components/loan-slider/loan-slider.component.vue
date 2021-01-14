<template>
  <div
    :class="{
      'Card--borderless': props.borderless,
      'Card--elevated': props.elevated,
    }"
    class="LoanSlider Card MarginBottom-base"
  >
    <div class="Card-body">
      <div class="MarginBottom-base">
        <div class="Flex JustifyContent-between">
          <strong>Jumlah Pinjaman</strong>
          <strong class="Color-primary">{{ state.loanAmount }} juta</strong>
        </div>

        <my-slider v-model="state.loanAmount" :max="20" :min="2"></my-slider>

        <div class="Flex JustifyContent-between">
          <span>2 juta</span>
          <span>20 juta</span>
        </div>
      </div>

      <div class="MarginBottom-base">
        <div class="Flex JustifyContent-between">
          <strong>Lama Pinjaman</strong>
          <strong class="Color-primary">{{ state.loanPeriod }} bulan</strong>
        </div>

        <my-slider v-model="state.loanPeriod" :max="20" :min="6"></my-slider>

        <div class="Flex JustifyContent-between">
          <span>6 bulan</span>
          <span>20 bulan</span>
        </div>
      </div>

      <hr />

      <div class="TextAlign-center">
        <p>
          <strong>Cicilan per bulan</strong>
          <br />
          <small class="Color-light-70">
            *sudah termasuk bunga dan biaya admin
          </small>
        </p>

        <p class="MarginBottom-xsmall">
          <strong class="Color-primary FontSize-2xlarge">
            {{ installmentInRupiah }}
          </strong>
        </p>
      </div>

      <my-button full-width color="primary" to="/loan">
        Ajukan Pinjaman
      </my-button>
    </div>
  </div>
</template>

<script src="./loan-slider.component.js"></script>

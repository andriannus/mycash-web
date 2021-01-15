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

<script src="./landing-terms-loan.component.js"></script>
<style lang="scss" scoped src="./landing-terms-loan.component.scss"></style>

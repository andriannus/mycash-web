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

<script src="./landing-steps.component.js"></script>
<style lang="scss" scoped src="./landing-steps.component.scss"></style>

<template>
  <div class="Container PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="TextAlign-center MarginBottom-large">
      <p class="FontSize-large MarginBottom-base">
        Testimoni Nasabah
      </p>

      <p>Apakah KTA Tunaiku Aman?</p>
    </div>

    <div class="LandingTestimonial-list">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.age"
        class="Card"
      >
        <div class="Card-body">
          <div class="Flex AlignItems-center">
            <my-icon icon="user-circle" size="3x"></my-icon>

            <div class="Flex Flex-column MarginLeft-base">
              <p class="FontSize-small">
                {{ testimonial.name }}, {{ testimonial.age }} tahun
              </p>

              <p>
                <strong>{{ testimonial.amount }}</strong>
              </p>
            </div>
          </div>

          <hr class="MarginTop-base MarginBottom-base" />

          <div class="TextAlign-center">
            <p>{{ testimonial.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./landing-testimonial.component.js"></script>
<style lang="scss" scoped src="./landing-testimonial.component.scss"></style>

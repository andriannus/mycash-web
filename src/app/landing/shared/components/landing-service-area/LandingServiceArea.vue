<template>
  <div class="Container PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="TextAlign-center MarginBottom-large">
      <p class="FontSize-large">
        Area Layanan Kami
      </p>
    </div>

    <div
      v-for="serviceArea in serviceAreas"
      :key="serviceArea.island"
      class="LandingServiceArea-list"
    >
      <div
        class="Flex AlignItems-center JustifyContent-center MarginBottom-small"
      >
        <my-icon class="Color-info" icon="map-marker-alt" size="lg"></my-icon>

        <p class="Transform-capitalize MarginLeft-small">
          <strong>{{ serviceArea.island }}</strong>
        </p>
      </div>

      <div class="TextAlign-center">
        <span>{{ transformCityText(serviceArea.island) }}</span>
      </div>
    </div>

    <hr class="MarginTop-base MarginBottom-base" />

    <div class="TextAlign-center">
      <span class="FontSize-small Color-light-80">
        *) Jika ada perluasan wilayah, kami akan segera memperbarui info di
        website dan media sosial kami.
      </span>
    </div>
  </div>
</template>

<script>
import { SERVICE_AREAS } from "./landing-service-area.constant";

export default {
  name: "LandingServiceArea",

  setup() {
    const serviceAreas = SERVICE_AREAS;

    const transformCityText = area => {
      const selectedArea = SERVICE_AREAS.find(({ island }) => island === area);
      const selectedCities = selectedArea.cities.map(city => {
        return city.charAt(0).toUpperCase() + city.slice(1);
      });
      const lastCityIndex = selectedCities.length - 1;
      const lastCity = selectedCities[lastCityIndex];

      if (selectedCities.length < 3) {
        return selectedCities.join(" dan ");
      }

      selectedCities[lastCityIndex] = `dan ${lastCity}`;
      return selectedCities.join(", ");
    };

    return { serviceAreas, transformCityText };
  },
};
</script>

<style lang="scss" scoped>
.LandingServiceArea {
  &-list {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
</style>

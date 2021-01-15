import { defineComponent } from "vue";

import { SERVICE_AREAS } from "./landing-service-area.constant";

export default defineComponent({
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
});

import { defineComponent } from "vue";

import { TESTIMONIALS } from "./landing-testimonial.const";

export default defineComponent({
  name: "LandingTestimonial",

  setup() {
    const testimonials = TESTIMONIALS;

    return { testimonials };
  },
});

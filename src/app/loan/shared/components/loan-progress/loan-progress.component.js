import { defineComponent } from "vue";

export default defineComponent({
  name: "LoanProgress",

  props: {
    max: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
});

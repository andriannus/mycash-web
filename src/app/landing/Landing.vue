<template>
  <div class="Padding-base">
    <my-button full-width color="primary" to="/loan">Ajukan Pinjaman</my-button>
  </div>
</template>

<script>
import MyButton from "@/shared/components/my-button/MyButton.vue";

export default {
  name: "Landing",

  components: {
    MyButton,
  },
};
</script>

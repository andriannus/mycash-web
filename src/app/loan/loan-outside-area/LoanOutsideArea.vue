<template>
  <my-page>
    <my-content :has-toolbar="false">
      <div class="ServiceAreaIcon-container MarginTop-base MarginBottom-base">
        <ServiceAreaIcon />
      </div>

      <p class="MarginBottom-base">
        <strong>
          Mohon maaf, daerah Anda belum termasuk dalam area layanan kami.
        </strong>
      </p>

      <p class="MarginBottom-base">
        Ayo dukung terus Tunaiku untuk mengembangkan layanan sampai ke daerah
        Anda dengan cara:
      </p>

      <ol class="MarginLeft-base">
        <li class="MarginBottom-xsmall">Beri bintang 5 di Google Play.</li>

        <li>
          <p>Tulis nama daerah Anda di kolom komentar.</p>
          <p>
            <strong>Contoh:</strong>
            Papua, Kab. Merauke, Kec. Tanah Miring, atau Kemangi.
          </p>
        </li>
      </ol>

      <template #contentFooter>
        <my-button
          color="primary"
          class="MarginBottom-base"
          full-width
          outlined
          to="/"
        >
          Keluar
        </my-button>

        <my-button color="primary" full-width>
          Buka Google Play
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyButton from "@/shared/components/my-button/MyButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";

export default {
  name: "LoanOutsideArea",

  components: {
    MyButton,
    MyContent,
    MyPage,
    ServiceAreaIcon,
  },
};
</script>

<style lang="scss" scoped>
.ServiceAreaIcon-container {
  text-align: center;
}
</style>

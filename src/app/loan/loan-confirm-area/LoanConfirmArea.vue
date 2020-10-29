<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Area Layanan</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <div class="ServiceAreaIcon-container MarginTop-base MarginBottom-base">
        <ServiceAreaIcon />
      </div>

      <p class="MarginBottom-base">
        <strong>Pilih area tempat tinggal Anda di bawah ini!</strong>
      </p>

      <my-radio
        v-model="isInsideServiceArea"
        id="RbInsideServiceArea"
        className="MarginBottom-base"
        name="RbServiceArea"
        :value="true"
      >
        <p>
          <strong>Jawa:</strong>
          Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Semarang,
          Yogyakarta, Gresik, Sidoarjo, dan Surabaya.
        </p>

        <p>
          <strong>Sumatera:</strong>
          Medan, Palembang, dan Pekanbaru.
        </p>

        <p>
          <strong>Bali:</strong>
          Denpasar.
        </p>

        <p>
          <strong>Sulawesi:</strong>
          Makassar.
        </p>
      </my-radio>

      <my-radio
        v-model="isInsideServiceArea"
        id="RbOutsideServiceArea"
        name="RbServiceArea"
        :value="true"
      >
        Di kota lainnya.
      </my-radio>

      <template #contentFooter>
        <my-button color="primary" full-width>
          Lanjutkan
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import { ref } from "vue";

import ServiceAreaIcon from "../shared/images/service-area.svg";

import MyBackButton from "@/shared/components/my-back-button/MyBackButton.vue";
import MyButton from "@/shared/components/my-button/MyButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyRadio from "@/shared/components/my-radio/MyRadio.vue";
import MyTitle from "@/shared/components/my-title/MyTitle.vue";
import MyToolbar from "@/shared/components/my-toolbar/MyToolbar.vue";

export default {
  name: "LoanVentureCapital",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadio,
    MyTitle,
    MyToolbar,
    ServiceAreaIcon,
  },

  setup() {
    const isInsideServiceArea = ref(null);

    return { isInsideServiceArea };
  },
};
</script>

<style lang="scss" scoped>
.ServiceAreaIcon-container {
  text-align: center;
}

::v-deep {
  .Radio-control {
    min-width: 20px;
  }
}
</style>

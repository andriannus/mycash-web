<template>
  <div class="Container TextAlign-center PaddingTop-large PaddingBottom-large">
    <p class="FontSize-large MarginBottom-large">
      Mengapa Lebih Baik Memilih Tunaiku
    </p>

    <div class="Grids">
      <div class="Grid Grid-12 Grid-sm-12 Grid-md-4">
        <practical-submissions-icon
          class="LandingAdvantages-icon MarginBottom-base"
        ></practical-submissions-icon>

        <p class="MarginBottom-base">
          <strong>Pengajuan yang Praktis</strong>
        </p>

        <span class="FontSize-small Color-light-80">
          Cukup dengan KTP, tidak perlu NPWP dan kartu kredit, disertakan hasil
          persetujuan pinjaman yang cepat untuk Anda.
        </span>
      </div>

      <div class="Grid Grid-12 Grid-sm-12 Grid-md-4">
        <large-and-light-loans-icon
          class="LandingAdvantages-icon MarginBottom-base"
        ></large-and-light-loans-icon>

        <p class="MarginBottom-base">
          <strong>Pinjaman Besar dan Ringan</strong>
        </p>

        <span class="FontSize-small Color-light-80">
          Jumlah pinjaman yang besar hingga 20 juta dengan jangka waktu cicilan
          yang panjang hingga 20 bulan.
        </span>
      </div>

      <div class="Grid Grid-12 Grid-sm-12 Grid-md-4">
        <safe-transparent-icon
          class="LandingAdvantages-icon MarginBottom-base"
        ></safe-transparent-icon>

        <p class="MarginBottom-base">
          <strong>Aman Transparan</strong>
        </p>

        <span class="FontSize-small Color-light-80">
          PT Bank Amar Indonesia Tbk. terdaftar dan diawasi oleh OJK Indonesia
          sejak 2014, tanpa biaya tersembunyi.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import LargeAndLightLoansIcon from "../../images/large-and-light-loans.svg";
import PracticalSubmissionsIcon from "../../images/practical-submissions.svg";
import SafeTransparentIcon from "../../images/safe-transparent.svg";

export default {
  name: "LandingAdvantages",

  components: {
    LargeAndLightLoansIcon,
    PracticalSubmissionsIcon,
    SafeTransparentIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/responsive/scss/mixins";

.LandingAdvantages {
  &-icon {
    height: 120px;
  }
}

@include amb-responsive-media("xs") {
  .Grid {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}

@include amb-responsive-media("md") {
  .Grid {
    margin-bottom: 0;
  }
}
</style>

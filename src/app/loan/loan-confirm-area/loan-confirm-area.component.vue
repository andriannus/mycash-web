<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Area Layanan</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <div class="TextAlign-center MarginTop MarginBottom">
        <service-area-icon></service-area-icon>
      </div>

      <p class="MarginBottom">
        <strong>Pilih area tempat tinggal Anda di bawah ini!</strong>
      </p>

      <my-radio
        v-model="serviceArea"
        id="RbInsideServiceArea"
        className="MarginBottom"
        name="RbServiceArea"
        value="inside"
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
        v-model="serviceArea"
        id="RbOutsideServiceArea"
        name="RbServiceArea"
        value="outside"
      >
        Di kota lainnya.
      </my-radio>

      <template #contentFooter>
        <my-button
          color="primary"
          :disabled="hasNotBeenSelected"
          full-width
          @click="onClickNextButton"
        >
          Lanjutkan
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script src="./loan-confirm-area.component.js"></script>
<style lang="scss" scoped src="./loan-confirm-area.component.scss"></style>

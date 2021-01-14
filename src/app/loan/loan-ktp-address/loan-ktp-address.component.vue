<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Alamat KTP</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <template #progress>
        <loan-progress :max="100" :value="pagePercentage"></loan-progress>
      </template>

      <p class="FontSize-small MarginBottom">
        Lengkapi semua data di bawah ini sesuai dengan KTP Anda.
      </p>

      <div class="Grids">
        <div class="Grid">
          <my-text-field id="TxtBlockNumber" label="Nomor Blok"></my-text-field>
        </div>

        <div class="Grid">
          <my-text-field
            id="TxtHouseNumber"
            label="Nomor Rumah"
          ></my-text-field>
        </div>
      </div>

      <div class="Grids">
        <div class="Grid">
          <my-text-field id="TxtRt" label="RT"></my-text-field>
        </div>

        <div class="Grid">
          <my-text-field id="TxtRw" label="RW"></my-text-field>
        </div>
      </div>

      <template #contentFooter>
        <my-button color="primary" full-width>Lanjutkan</my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script src="./loan-ktp-address.component.js"></script>

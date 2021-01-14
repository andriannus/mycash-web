<template>
  <my-page>
    <my-content :has-toolbar="false">
      <div class="TextAlign-center MarginTop-base MarginBottom-base">
        <service-area-icon></service-area-icon>
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
        <li class="MarginBottom-xsmall">Beri bintang 5 di Play Store.</li>

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
          Buka Play Store
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script src="./loan-outside-area.component.js"></script>

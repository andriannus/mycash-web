<template>
  <my-page>
    <my-content :has-toolbar="false">
      <div class="TextAlign-center MarginTop MarginBottom">
        <service-area-icon></service-area-icon>
      </div>

      <p class="MarginBottom">
        <strong>
          Mohon maaf, daerah Anda belum termasuk dalam area layanan kami.
        </strong>
      </p>

      <p class="MarginBottom">
        Ayo dukung terus Tunaiku untuk mengembangkan layanan sampai ke daerah
        Anda dengan cara:
      </p>

      <ol class="MarginLeft">
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
          class="MarginBottom"
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

<template>
  <my-page>
    <my-content :has-toolbar="false">
      <div class="TextAlign-center MarginTop-base MarginBottom-base">
        <rejected-age-icon></rejected-age-icon>
      </div>

      <p class="TextAlign-justify">
        Mohon maaf, Tunaiku hanya melayani nasabah yang berusia antara 21 sampai
        55 tahun.
      </p>

      <template #contentFooter>
        <my-button color="primary" full-width outlined to="/">
          Keluar
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script src="./loan-rejected-age.component.js"></script>

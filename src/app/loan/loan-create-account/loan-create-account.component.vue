<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Ajukan Pinjaman</my-title>
        <my-feedback></my-feedback>
      </my-toolbar>
    </my-header>

    <my-content>
      <div class="Card Card--elevated Card--borderless">
        <div class="Card-body">
          <div class="MarginBottom-base">
            <p>
              <small>Total Pinjaman</small>
            </p>
            <strong>Rp12 Juta</strong>
          </div>

          <div class="Flex JustifyContent-between">
            <div>
              <p>
                <small>Cicilan per Bulan</small>
              </p>
              <strong>Rp1.089.539</strong>
            </div>

            <div class="TextAlign-right">
              <p>
                <small>Lama Cicilan</small>
              </p>
              <strong>17 Bulan</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="MarginTop-base">
        <my-text-field
          id="TxtFullName"
          label="Nama Sesuai KTP"
          placeholder="Masukkan nama kamu"
        ></my-text-field>

        <my-text-field
          id="TxtKtp"
          label="Nomor KTP (NIK)"
          placeholder="Masukkan nomor KTP kamu"
        ></my-text-field>
      </div>

      <template #contentFooter>
        <my-button color="primary" full-width @click="onClickNextButton">
          Lanjut Isi Formulir Pengajuan
        </my-button>
      </template>
    </my-content>

    <my-dialog v-model="state.isDialogShown">
      <p class="Color-gray-50 MarginBottom">
        Apakah nomor handphone Anda sudah benar? Pastikan nomor Anda aktif untuk
        menerima sms kode verifikasi kami.
      </p>

      <p>
        <strong>+628512312412</strong>
      </p>

      <div class="Flex JustifyContent-end MarginTop-large">
        <my-button
          className="MarginRight-2xsmall"
          color="primary"
          :text="true"
          @click="toggleDialogShow"
        >
          Ubah
        </my-button>

        <my-button color="primary" @click="onClickConfirmButton">
          Ya, Lanjutkan
        </my-button>
      </div>
    </my-dialog>
  </my-page>
</template>

<script src="./loan-create-account.component.js"></script>

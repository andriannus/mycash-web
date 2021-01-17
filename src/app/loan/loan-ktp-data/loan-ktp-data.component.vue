<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button v-if="setup.isBackButtonShown"></my-back-button>
        <my-title>Data KTP</my-title>
        <my-feedback></my-feedback>
      </my-toolbar>
    </my-header>

    <my-content>
      <template #progress>
        <loan-progress :max="100" :value="pagePercentage"></loan-progress>
      </template>

      <p class="FontSize-small MarginBottom">
        Lengkapi semua data di bawah ini sesuai dengan KTP Anda.
      </p>

      <my-text-field
        id="TxtKtp"
        :disabled="true"
        label="Nomor KTP (NIK)"
        placeholder="Masukkan nomor KTP kamu"
      ></my-text-field>

      <my-text-field
        id="TxtFullName"
        :disabled="true"
        label="Nama Sesuai KTP"
        placeholder="Masukkan nama kamu"
      ></my-text-field>

      <my-date-field
        id="DtpBirthdayDate"
        label="Tanggal Lahir"
        placeholder="Masukkan tanggal lahir kamu"
      ></my-date-field>

      <p class="FontSize-small Color-dark MarginBottom">
        <em>
          Minimal umur 21 tahun. Kami akan cek kesesuaian dengan KTP Anda saat
          tanda tangan kontrak.
        </em>
      </p>

      <div class="Field">
        <label class="Field-label">Jenis Kelamin</label>

        <div class="Field-control Flex">
          <my-radio
            id="RbMale"
            class-name="MarginRight"
            name="Gender"
            value="male"
          >
            Laki-laki
          </my-radio>

          <my-radio id="RbFemale" name="Gender" value="female">
            Perempuan
          </my-radio>
        </div>
      </div>

      <template #contentFooter>
        <my-button color="primary" full-width @click="onClickNextButton">
          Lanjutkan
        </my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script src="./loan-ktp-data.component.js"></script>

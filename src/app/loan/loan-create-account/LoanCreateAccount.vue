<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Ajukan Pinjaman</my-title>
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
  </my-page>
</template>

<script>
import { computed, ref } from "vue";

import MyBackButton from "@/shared/components/my-back-button/MyBackButton.vue";
import MyButton from "@/shared/components/my-button/MyButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyTextField from "@/shared/components/my-text-field/MyTextField.vue";
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
    MyTextField,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const serviceArea = ref(null);
    const hasNotBeenSelected = computed(() => !serviceArea.value);

    const onClickNextButton = () => {
      console.log("OK");
    };

    return {
      hasNotBeenSelected,
      onClickNextButton,
      serviceArea,
    };
  },
};
</script>

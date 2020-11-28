<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button v-if="setup.isBackButtonShown"></my-back-button>
        <my-title>Data KTP</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
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

      <div class="Field">
        <label class="Field-label">Jenis Kelamin</label>

        <div class="Field-control Flex">
          <my-radio
            id="RbMale"
            className="MarginRight"
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
        <my-button color="primary" full-width>Lanjutkan</my-button>
      </template>
    </my-content>
  </my-page>
</template>

<script>
import { reactive } from "vue";

import MyBackButton from "@/shared/components/my-back-button/MyBackButton.vue";
import MyButton from "@/shared/components/my-button/MyButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyPage from "@/shared/components/my-page/MyPage.vue";
import MyRadio from "@/shared/components/my-radio/MyRadio.vue";
import MyTextField from "@/shared/components/my-text-field/MyTextField.vue";
import MyTitle from "@/shared/components/my-title/MyTitle.vue";
import MyToolbar from "@/shared/components/my-toolbar/MyToolbar.vue";

export default {
  name: "LoanKtpData",

  components: {
    MyBackButton,
    MyButton,
    MyContent,
    MyHeader,
    MyPage,
    MyRadio,
    MyTextField,
    MyTitle,
    MyToolbar,
  },

  setup() {
    const setup = reactive({
      isBackButtonShown: false,
    });

    return { setup };
  },
};
</script>

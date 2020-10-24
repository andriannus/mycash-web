<template>
  <my-header>
    <my-toolbar>
      <my-back-button></my-back-button>
      <my-title>Tujuan Pinjaman</my-title>
    </my-toolbar>
  </my-header>

  <my-content>
    <div>Hello World</div>

    <template #contentFooter>
      <button class="Button Button--primary Button--fullWidth">
        Lanjutkan
      </button>
    </template>
  </my-content>
</template>

<script>
import MyBackButton from "@/shared/components/my-back-button/MyBackButton.vue";
import MyContent from "@/shared/components/my-content/MyContent.vue";
import MyHeader from "@/shared/components/my-header/MyHeader.vue";
import MyTitle from "@/shared/components/my-title/MyTitle.vue";
import MyToolbar from "@/shared/components/my-toolbar/MyToolbar.vue";

export default {
  name: "LoanPurpose",

  components: {
    MyBackButton,
    MyContent,
    MyHeader,
    MyTitle,
    MyToolbar,
  },
};
</script>

<template>
  <my-page>
    <my-header>
      <my-toolbar>
        <my-back-button></my-back-button>
        <my-title>Tujuan Pinjaman</my-title>
      </my-toolbar>
    </my-header>

    <my-content>
      <my-radio-group
        v-model="loanPurpose"
        id="RbLoanPurpose"
        :options="options"
      ></my-radio-group>

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

<script src="./loan-purpose.component.js"></script>

<template>
  <teleport to="body">
    <my-slide-up-transition>
      <button
        v-if="isShowApplyLoanButton"
        class="ApplyLoanButton Button Button--primary Button--elevated Button--rounded"
        type="button"
        @click="onClickButton"
      >
        Ajukan Pinjaman
      </button>
    </my-slide-up-transition>
  </teleport>
</template>

<script src="./apply-loan-button.component.js"></script>
<style lang="scss" scoped src="./apply-loan-button.component.scss"></style>

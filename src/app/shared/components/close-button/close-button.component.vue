<template>
  <button :class="buttonColor" @click="emit('onClick')">
    <my-icon icon="times"></my-icon>
  </button>
</template>

<script src="./close-button.component.js"></script>
<style lang="scss" scoped src="./close-button.component.scss"></style>

<template>
  <div class="Progress">
    <progress class="Progress-bar" :max="max" :value="value"></progress>
    <span class="Progress-value">{{ value }}%</span>
  </div>
</template>

<script src="./loan-progress.component.js"></script>
<style lang="scss" scoped src="./loan-progress.component.scss"></style>

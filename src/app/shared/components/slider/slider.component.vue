<template>
  <input
    id="Slider"
    :class="[hasClassName && className]"
    class="Slider"
    :max="max"
    :min="min"
    :name="name"
    :step="step"
    type="range"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script src="./slider.component.js"></script>
<style lang="scss" scoped src="./slider.component.scss"></style>

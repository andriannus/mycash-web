<template>
  <div
    v-for="(option, index) in options"
    :key="index"
    class="Radio MarginBottom"
  >
    <input
      :id="id + index"
      class="Radio-control"
      :name="id"
      :value="option.value"
      type="radio"
      @change="onChange"
    />

    <label class="Radio-label" :for="id + index">
      {{ option.text }}
    </label>
  </div>
</template>

<script src="./radio-group.component.js"></script>

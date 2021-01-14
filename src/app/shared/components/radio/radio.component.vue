<template>
  <div :class="[hasClassName ? className : '']" class="Radio">
    <input
      :id="id"
      class="Radio-control"
      :name="name"
      type="radio"
      :value="modelValue"
      @change="onChange"
    />

    <label class="Radio-label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script src="./radio.component.js"></script>

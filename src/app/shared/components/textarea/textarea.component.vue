<template>
  <div class="Field MarginBottom">
    <label
      v-if="isLabelExist"
      :class="{ 'Color-danger': isErrorExist }"
      class="Field-label"
      :for="id"
    >
      {{ label }}
    </label>

    <div class="Field-control">
      <textarea
        :id="id"
        :class="{ 'Input--danger': isErrorExist }"
        class="Input"
        :disabled="disabled"
        :placeholder="placeholder"
        :rows="rows"
        :style="{ resize }"
        :value="modelValue"
        @input="onInput"
      ></textarea>
    </div>

    <div v-if="isErrorExist" class="Field-helper Color-danger">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script src="./textarea.component.js"></script>

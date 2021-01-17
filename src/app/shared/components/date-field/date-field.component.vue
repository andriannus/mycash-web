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
      <input
        :id="id"
        :class="{ 'Input--danger': isErrorExist }"
        class="Input"
        :disabled="disabled"
        :placeholder="placeholder"
        type="text"
        :value="modelValue"
        @input="onInput"
      />
    </div>

    <div v-if="isErrorExist" class="Field-helper Color-danger">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script src="./date-field.component.js"></script>

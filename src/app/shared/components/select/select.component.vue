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
      <div :class="{ 'Input--danger': isErrorExist }" class="Select">
        <select :id="id" @change="selectOption($event.target.value)">
          <option value="" disabled selected>{{ placeholder }}</option>
          <option
            v-for="(item, key) in items"
            :key="key"
            :selected="isSelected(item.value)"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="isErrorExist" class="Field-helper Color-danger">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script src="./select.component.js"></script>

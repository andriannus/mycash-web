<template>
  <router-link v-if="isLink" :class="buttonClassNames" :to="to">
    <slot></slot>
  </router-link>

  <button
    v-else
    :class="buttonClassNames"
    :disabled="disabled"
    :type="type"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script src="./button.component.js"></script>

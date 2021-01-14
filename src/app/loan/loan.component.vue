<template>
  <router-view v-slot="{ Component }">
    <my-fade-transition>
      <component :is="Component"></component>
    </my-fade-transition>
  </router-view>
</template>

<script src="./loan.component.js"></script>

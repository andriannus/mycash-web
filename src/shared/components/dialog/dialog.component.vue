<template>
  <teleport to="body">
    <my-bounce-transition>
      <div v-if="modelValue" class="Dialog">
        <div class="Dialog-backdrop"></div>

        <div class="Dialog-box">
          <div class="Dialog-block">
            <slot></slot>
          </div>
        </div>
      </div>
    </my-bounce-transition>
  </teleport>
</template>

<script src="./dialog.component.js"></script>

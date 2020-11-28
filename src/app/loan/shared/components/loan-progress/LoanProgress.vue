<template>
  <div class="Progress">
    <progress class="Progress-bar" :max="max" :value="value"></progress>
    <span class="Progress-value">{{ value }}%</span>
  </div>
</template>

<script>
export default {
  name: "LoanProgress",

  props: {
    max: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/color/color";

.Progress {
  align-items: center;
  background-color: $amb-neutral-10;
  display: flex;
  padding: 1rem;

  &-bar {
    appearance: none;
    border: none;
    height: 0.25rem;
    width: 100%;

    &[value] {
      &::-webkit-progress-bar,
      &::-webkit-progress-value {
        border-radius: 2px;
      }

      &::-webkit-progress-bar {
        background-color: $amb-neutral;
      }

      &::-webkit-progress-value {
        background-color: $amb-primary;
      }

      &::-moz-progress-bar {
        background-color: $amb-primary;
      }
    }
  }

  &-value {
    color: $amb-neutral-70;
    flex-basis: 2.5rem;
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    margin-left: 0.5rem;
    text-align: right;
  }
}
</style>

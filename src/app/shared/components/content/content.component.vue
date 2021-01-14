<template>
  <slot name="progress"></slot>

  <div
    :class="[
      {
        'MyContent--hasToolbar': hasToolbar,
      },
      {
        'MyContent--hasProgress': hasProgress,
      },
      hasClassName && props.className,
    ]"
    class="MyContent Flex Flex-column JustifyContent-spaceBetween"
  >
    <div
      v-if="hasContentHeader"
      :class="[
        {
          [`PaddingRight-${padding}`]: hasPadding,
        },
        {
          [`PaddingTop-${padding}`]: hasPadding,
        },
        {
          [`PaddingLeft-${padding}`]: hasPadding,
        },
      ]"
      class="MyContent-header"
    >
      <slot name="contentHeader"></slot>
    </div>

    <div
      :class="{
        [`Padding-${padding}`]: hasPadding,
      }"
      class="MyContent-body"
    >
      <slot></slot>
    </div>

    <div
      v-if="hasContentFooter"
      :class="[
        {
          [`PaddingRight-${padding}`]: hasPadding,
        },
        {
          [`PaddingBottom-${padding}`]: hasPadding,
        },
        {
          [`PaddingLeft-${padding}`]: hasPadding,
        },
      ]"
      class="MyContent-footer"
    >
      <slot name="contentFooter"></slot>
    </div>
  </div>
</template>

<script src="./content.component.js"></script>
<style lang="scss" scoped src="./content.component.scss"></style>

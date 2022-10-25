<script lang="ts" setup>

export interface Props {
  active?: boolean,
  title: string,
  href: string
}

defineProps<Props>()
</script>

<template>
  <div class="base-style-card">
    <div class="base-style-card__img" :class="{'base-style-card__img--active': active}">
      <slot name="image">
        <img :src="href" alt="">
      </slot>
    </div>
    <div class="base-style-card__title">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-style-card {
  &__img {
    position: relative;
    min-width: 100px;
    min-height: 100px;
    max-height: 100px;
    background-color: #D9D9D9;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid transparent;
    &--active {
      border: 2px solid #FFD740;
      &::before {
        z-index: 100;
        content: '';
        position: absolute;
        background-color: rgba(255, 215, 64, 0.3);
        width: 100%;
        height: 100%;
      }
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 12px;
      max-width: 100px;
    }
  }
  &__title {
    margin-top: 10px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
}
</style>

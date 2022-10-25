<script lang="ts" setup>
import { computed, toRefs } from 'vue';

interface Props {
  yellow?: boolean,
  black?: boolean,
  green?: boolean,
  disabled?: boolean
}

const props = defineProps<Props>()
const {yellow, black, green, disabled} = toRefs(props)

const getAdditionalClasses = computed(() => {
  const classes = {
    'base-button--yellow': yellow?.value,
    'base-button--black': black?.value,
    'base-button--green': green?.value,
    'base-button--disabled': disabled?.value,
  }
  return classes
})
</script>

<template>
  <button class="base-button" :disabled="disabled" :class="getAdditionalClasses">
    <slot>
    </slot>
  </button>
</template>

<style lang="scss" scoped>
  .base-button {
    display: block;
    background: white;
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    padding: 14px;
    width: 100%;
    border-radius: 12px;
    border: none;
    &--yellow {
      background-color: #FFD740;
    }
    &--black {
      background-color: #000000;
      color: white;
    }
    &--green {
      background-color: #34A853;
      color: white;
    }
    &--disabled {
      opacity: 0.5;
    }
  }
</style>

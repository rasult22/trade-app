<script lang="ts" setup>

export type Tag = {
  text: string,
  active: boolean
}
interface Props {
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="base-tag" :class="{'base-tag--active': active}">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.base-tag {
  white-space: nowrap;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 8px 16px;
  border: 2px solid transparent;
  &--active {
    background: rgba(255, 215, 64, 0.3);
    border: 2px solid #FFD740;
  }
}
</style>

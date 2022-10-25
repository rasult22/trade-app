<script lang="ts" setup>
import { ref } from 'vue';
import BaseStyleCard from './base-style-card.vue'

export type StyleCardItem = {
  title: string,
  href: string,
  active?: boolean
}

interface Props {
  items: StyleCardItem[],
  isHorizontal?: boolean
}
defineProps<Props>()
const emit = defineEmits(['itemSelected'])

const selectedItem = ref<StyleCardItem>()
const onClick = (item: StyleCardItem) => {
  if (selectedItem.value) {
    selectedItem.value.active = false
  }
  item.active = true
  selectedItem.value= item
  emit('itemSelected', item)
}
</script>

<template>
  <div class="style-card-list">
    <template v-if="isHorizontal">
      <div class="style-card-list__wrapper">
        <BaseStyleCard @click="onClick(item)" :title="item.title" :href="item.href" class="style-card-list__item" v-for="(item, i) in items" :key="i" :active="item.active"></BaseStyleCard>
      </div>
    </template>
    <template v-else>
      <div class="style-card-list__wrapper--vertical">
        <!-- <BaseStyleCard class="style-card-list__item style-card-list__item--vertical" v-for="i in 12" :key="i"></BaseStyleCard> -->
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

.style-card-list {
  overflow: auto;
  padding: 10px 0 30px;
  &__wrapper {
    display: flex;
    &:first-child {
      margin-top: 0;
    }
    margin-top: 20px;

    &--vertical {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__item {
    margin-right: 16px;
    &--vertical {
      &:nth-child(3n) {
        margin-right: 0;
      }
      margin-top: 20px;
    }
  }
}
</style>

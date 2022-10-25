<script lang="ts" setup>
import BaseTag, { Tag } from './base-tag.vue'

interface Props {
  tags: Tag[]
}
const emit = defineEmits(['tagSelected'])

defineProps<Props>()

const onTagClick = (tag: Tag) => {
  emit('tagSelected', tag )
}
</script>

<template>
  <div class="base-tag-list">
    <BaseTag class="base-tag-list__item" :active="item.active" v-for="(item, index) in tags" :key="index" @click="onTagClick(item)">
      {{ item.text }}
    </BaseTag>
  </div>
</template>

<style lang="scss" scoped>

.base-tag-list {
  display: flex;
  padding: 10px 0 20px 0;
  overflow: auto;
  &__item {
    margin-right: 8px;
  }
}
</style>

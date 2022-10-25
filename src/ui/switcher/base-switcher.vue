<script lang="ts" setup>
import {onMounted, ref} from 'vue'

export type SwitchItem = {
  id: string,
  text: string,
  active: boolean
}

interface Props {
  items: SwitchItem[]
}

const props = defineProps<Props>()
const emit = defineEmits(['itemSelected'])
onMounted(() => {
  if (props.items) {
    arr.value = JSON.parse(JSON.stringify(props.items))
    activeItem.value = arr.value.find(x => x.active) || arr.value[0]
  }
})
const arr = ref<SwitchItem[]>([])
const activeItem = ref<SwitchItem>()

const onItemClick = (item: SwitchItem) => {
  if (activeItem.value)
    activeItem.value.active = false
  item.active = true
  activeItem.value = item
  emit('itemSelected' , item)
}
</script>

<template>
  <div class="base-switcher">
    <div @click="onItemClick(item)" class="base-switcher__item" v-for="(item, index) in arr" :key="index" :class="{'base-switcher__item--active': item.active}">
      {{ item.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

.base-switcher {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  padding: 3px;
  border-radius: 12px;

  display: flex;
  &__item {
    border-radius: 12px;
    padding: 12px;
    width: 50%;
    text-align: center;
    &--active {
      background-color: #fff;
    }
  }
}
</style>

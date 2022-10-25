<script setup>
// imports
import { computed, onBeforeUnmount, onMounted, ref, toRefs, watch } from 'vue'
import { getDeviceType } from 'src/utils/getDeviceType'
// vars
let currentOffset = 0
let actualHeight = 0
let cardStartOffset = 0
const closeThreshold = 100
const cardTopOffset = 12

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})
const { isOpen } = toRefs(props)
const emit = defineEmits(['update:isOpen'])

const isDialogOpen = ref(false)
// template refs
const header = ref()
const backdrop = ref()
const card = ref()
const content = ref()

onMounted(() => {
  isDialogOpen.value = isOpen.value
  // window.addEventListener('popstate', onPopState)
  if (isDialogOpen.value) {
    initModalCard()
  }
})
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
  // removeEventListener('popstate', onPopState)
})

watch(isOpen, (val) => {
  isDialogOpen.value = val

  if (val) {
    return
  }

})

watch(isDialogOpen, val => {
  if (val) {
    initModalCard()
  } else {
    document.body.style.overflow = 'auto'
  }
})

const cardBottomOffset = computed(() => {
  return getDeviceType() === 'android' ? 0 : 34
})

const initModalCard = () => {
  requestAnimationFrame(() => {
    document.body.style.overflow = 'hidden'

    const headerHeight = header.value.getBoundingClientRect().height

    backdrop.value.style.opacity = 1
    card.value.style.transform = 'translateY(0)'
    content.value.style.marginBottom = `${cardBottomOffset.value}px`
    content.value.style.maxHeight = `calc(100vh - ${
      headerHeight + cardTopOffset + cardBottomOffset.value
    }px)`

    actualHeight = card.value.getBoundingClientRect().height
  })
}

const onTouchStart = (e) => {
  cardStartOffset =
    window.innerHeight - e.touches[0].clientY - actualHeight
  requestAnimationFrame(() => {
    card.value.style.transitionDuration = '0.1s'
  })
}

const onTouchMove = (e) => {
  currentOffset =
    (window.innerHeight -
      actualHeight -
      e.touches[0].clientY -
      cardStartOffset) *
    -1
  if (currentOffset > 0) {
    card.value.style.transform = `translate(0, ${currentOffset}px)`
  }
}

const onTouchEnd = () => {
  card.value.style.transitionDuration = '0.25s'
  if (currentOffset > closeThreshold) {
    requestAnimationFrame(() => {
      closeDialog()
    })
  } else {
    card.value.style.transform = 'translate(0, 0)'
  }
}

const openDialog = () => {
  isDialogOpen.value = true
  requestAnimationFrame(() => {
    backdrop.value.style.opacity = 1
  })
}
const closeDialog = () => {
  card.value.style.transform = 'translateY(120%)'
  backdrop.value.style.opacity = 0

  setTimeout(() => {
    isDialogOpen.value = false
    emit('update:isOpen', false)
  }, 250)
}
</script>

<template>
  <div v-if="isDialogOpen" class="k-dialog">
    <div ref="card" class="k-dialog__card">
      <div class="k-dialog__card_close">
        <slot :close="closeDialog" name="tail-action">
          <div class="icon-wrapper" @click="closeDialog">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 6L18 18" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </slot>
      </div>
      <div
        ref="header"
        class="k-dialog__header"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        @touchmove="onTouchMove"
      >
        <div class="k-dialog__slider">
          <div class="k-dialog__slider-stick"></div>
        </div>
        <div v-if="$slots.title" class="k-dialog__header_wrapper">
          <div class="k-dialog__header_title">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
        </div>
      </div>
      <div ref="content" class="k-dialog__content">
        <slot :close="closeDialog"></slot>
        <div v-if="$slots.footer" ref="footer" class="k-dialog__footer">
          <slot name="footer" :close="closeDialog"></slot>
        </div>
      </div>
    </div>
    <div ref="backdrop" class="k-dialog__backdrop" @click="closeDialog"></div>
  </div>
  <slot name="activator" :open="openDialog"></slot>
</template>

<style lang="scss" scoped>
.k-dialog {
  font-family: Roboto-Regular;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  &__backdrop {
    position: absolute;
    width: inherit;
    height: inherit;
    opacity: 0;
    transition: opacity 0.25s;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__card {
    width: 100vw;
    max-height: 80vh;
    padding-bottom: 10px;
    border-radius: 12px 12px 0 0;
    flex: 1;
    background-color: white;
    transform: translateY(150%);
    transition: transform 0.25s ease-out;
    overflow: hidden;
    z-index: 100;

    &_close {
      position: fixed;
      right: 16px;
      top: 16px;
      z-index: 100;
    }
  }

  &__header {
    position: relative;
    width: 100%;
    background-color: #fff;
    color: #4a4a4a;

    &_wrapper {
      padding: 16px;
      display: flex;
      justify-content: space-between;
    }

    &_title {
      font-family: Roboto-Bold;
      max-width: 300px;
      text-align: left;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__content {
    position: relative;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__footer {
    position: sticky;
    width: 100vw;
    bottom: 0;
    background-color: #fff;
  }

  &__slider {
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-stick {
      width: 32px;
      height: 4px;
      border-radius: 2px;
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
}
</style>

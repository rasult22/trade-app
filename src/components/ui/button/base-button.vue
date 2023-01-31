<script lang="ts" setup>
interface Props {
  primary?: boolean,
  secondary?: boolean,
  ghost?: boolean,
  inverse?: boolean,
  destructive?: boolean,
  tinted?: boolean,
  small?: boolean,
  middle?: boolean
}

defineProps<Props>()
</script>

<template>
  <button class="btn" :class="{
    'btn--primary': primary,
    'btn--secondary': secondary,
    'btn--ghost': ghost,
    'btn--inverse': inverse,
    'btn--destructive': destructive,
    'btn--tinted': tinted,
    'btn--small': small,
    'btn--middle': middle
  }">
    <slot>

    </slot>
  </button>
</template>

<style>
.btn {
  @apply px-3 py-3 bg-blue-600 text-slate-100 rounded-md border border-transparent focus:bg-blue-700 active:bg-blue-700 hover:bg-blue-700 focus:border active:border hover:border transition-all duration-100 font-medium
}
  .btn--secondary {
  @apply bg-white border-2 border-blue-300 text-blue-600 focus:bg-blue-50 active:bg-blue-50 hover:bg-blue-50 focus:text-blue-600 active:text-blue-600 hover:text-blue-600 focus:border-2 hover:border-2 focus:border-blue-300 active:border-blue-300 focus:outline-0 hover:border-blue-300
}
.btn--ghost {
  @apply bg-white text-blue-600 focus:bg-blue-50 active:bg-blue-50 hover:bg-blue-50 focus:outline-0
}
.btn--inverse {
  @apply text-white bg-transparent focus:bg-black active:bg-black hover:bg-black focus:outline-0
}
.btn--destructive {
  @apply text-red-500 bg-transparent focus:bg-red-50 active:bg-red-50 focus:border-transparent focus:outline-0 active:border-transparent hover:bg-red-50
}
.btn--tinted {
  @apply bg-blue-50 text-blue-600 focus:bg-blue-100 active:bg-blue-100 hover:bg-blue-100 focus:outline-0
}

.btn--small {
  @apply px-2 py-1
}
.btn--middle {
 @apply px-3 py-2
}
</style>

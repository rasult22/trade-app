<script lang="ts" setup>

defineProps<{src: string, refresh?: boolean, download?: boolean}>()
defineEmits(['refresh', 'download'])
</script>

<template>
  <div class="base-image">
    <img class="base-image__img" :src="src" alt="">
    <svg v-if="refresh" @click="$emit('refresh')" class="base-image__svg base-image__svg--refresh" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_968_9301)">
      <circle cx="40" cy="36" r="20" fill="white"/>
      </g>
      <path d="M38 43L37.6464 42.6464L37.2929 43L37.6464 43.3536L38 43ZM41.6464 38.6464L37.6464 42.6464L38.3536 43.3536L42.3536 39.3536L41.6464 38.6464ZM37.6464 43.3536L41.6464 47.3536L42.3536 46.6464L38.3536 42.6464L37.6464 43.3536Z" fill="black"/>
      <path d="M33.9378 39.5C33.1448 38.1264 32.8417 36.5241 33.0783 34.9557C33.315 33.3873 34.0772 31.9458 35.2402 30.8673C36.4033 29.7888 37.8981 29.1372 39.4798 29.0194C41.0616 28.9015 42.6365 29.3243 43.9465 30.2186C45.2565 31.1128 46.224 32.4254 46.6905 33.9414C47.1569 35.4574 47.0947 37.0869 46.5139 38.5629C45.9332 40.0389 44.8684 41.2739 43.494 42.0656C42.1196 42.8573 40.517 43.1588 38.9489 42.9206" stroke="black" stroke-linecap="round"/>
      <defs>
      <filter id="filter0_d_968_9301" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_968_9301"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_968_9301" result="shape"/>
      </filter>
      </defs>
    </svg>
    <svg v-if="download" @click="$emit('download')" class="base-image__svg base-image__svg--download" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_968_9299)">
      <circle cx="40" cy="36" r="20" fill="white"/>
      </g>
      <path d="M40 38L39.6464 38.3536L40 38.7071L40.3536 38.3536L40 38ZM40.5 29C40.5 28.7239 40.2761 28.5 40 28.5C39.7239 28.5 39.5 28.7239 39.5 29L40.5 29ZM34.6464 33.3536L39.6464 38.3536L40.3536 37.6464L35.3536 32.6464L34.6464 33.3536ZM40.3536 38.3536L45.3536 33.3536L44.6464 32.6464L39.6464 37.6464L40.3536 38.3536ZM40.5 38L40.5 29L39.5 29L39.5 38L40.5 38Z" fill="black"/>
      <path d="M33 40L33 41C33 42.1046 33.8954 43 35 43L45 43C46.1046 43 47 42.1046 47 41V40" stroke="black"/>
      <defs>
      <filter id="filter0_d_968_9299" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_968_9299"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_968_9299" result="shape"/>
      </filter>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>


.base-image {
  border-radius: 12px;
  background-color: aliceblue;
  position: relative;
  &__img {
    width: 100%;
    border-radius: 12px;
  }
  &__svg {
    position: absolute;
    z-index: 10;
    bottom: 0px;
    &--download {
      left: 0px;
    }
    &--refresh {
      right: 0px;
    }
  }
}

</style>

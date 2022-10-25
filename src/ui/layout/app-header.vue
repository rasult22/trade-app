<script setup lang="ts">

interface Props {
  title: string,
  showBackBtn: boolean,
}
defineEmits(['backNavigate'])
defineProps<Props>()
</script>

<template>
  <div class="app-header">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <svg v-if="showBackBtn" @click="$emit('backNavigate')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.707 2.79289C17.0975 3.18342 17.0975 3.81658 16.707 4.20711L8.91406 12L16.707 19.7929C17.0975 20.1834 17.0975 20.8166 16.707 21.2071C16.3164 21.5976 15.6833 21.5976 15.2927 21.2071L7.49985 13.4142C6.7188 12.6332 6.7188 11.3668 7.49985 10.5858L15.2927 2.79289C15.6833 2.40237 16.3164 2.40237 16.707 2.79289Z" fill="black"/>
        </svg>
        <q-toolbar-title>
          <span v-if="title" class="app-header__title">
            {{ title }}
          </span>
        </q-toolbar-title>
        <svg @click="$emit('profile-clicked')" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="10" r="3" stroke="#212121" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="#212121"/>
          <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#212121" stroke-linecap="round"/>
        </svg>
      </q-toolbar>
    </q-header>
  </div>
</template>

<style lang="scss" scoped>

.app-header {

  &__title {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: black;
  }
}

</style>

<script lang="ts" setup>
import { computed } from 'vue'
import { useBackBtn } from './back-btn'
import { useUserStore } from 'src/stores/user'

import AppHeader from 'src/ui/layout/app-header.vue'
import useHeader from 'src/composables/useHeader'

const userStore = useUserStore()
const { showBackBtn } = useHeader()
const { onBackNavigate } = useBackBtn(showBackBtn)
const title = computed(() => userStore.userName)
</script>

<template>
  <AppHeader @back-navigate="onBackNavigate" @profile-clicked="$router.push('/profile')" :title="title" :show-back-btn="showBackBtn"></AppHeader>
</template>

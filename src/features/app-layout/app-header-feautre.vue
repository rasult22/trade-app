<script lang="ts" setup>
import { watch, computed } from 'vue'
import { useBackBtn } from './back-btn'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'
import { initApp } from 'src/firebase'

import AppHeader from 'src/ui/layout/app-header.vue'
import useHeader from 'src/composables/useHeader'
import { useUserStore } from 'src/stores/user'

const app = initApp()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const { isAuthenticated, user } = useAuth(auth)
const signIn = () => signInWithPopup(auth, provider)
const userStore = useUserStore()

watch([user, isAuthenticated], ([val, val2]) => {
  userStore.user = val
  userStore.isAuthenticated = val2
}, { immediate: true })
const { showBackBtn } = useHeader()
const { onBackNavigate } = useBackBtn(showBackBtn)
const title = computed(() => userStore.userName)
</script>

<template>
  <AppHeader @back-navigate="onBackNavigate" @profile-clicked="signIn" :title="title" :show-back-btn="showBackBtn"></AppHeader>
</template>

<script lang="ts" setup>
import AppHeader from 'src/ui/layout/app-header.vue';
import useHeader from 'src/composables/useHeader';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const {showBackBtn, title} = useHeader()
const router = useRouter()

const onBackNavigate = () => {
  router.back()
}



// back btn routes logic
const allowBackBtnPages = ['/result', '/profile']
onMounted(() => {
  if(allowBackBtnPages.includes(router.currentRoute.value.fullPath)) {
    showBackBtn.value = true
  }
})
router.beforeEach((to, from, next) => {
  allowBackBtnPages.forEach((item) => {
    if(item === to.fullPath) {
      showBackBtn.value = true
    } else {
      showBackBtn.value = false
    }
  })
  next()
})
</script>

<template>
  <AppHeader @back-navigate="onBackNavigate" @profile-clicked="$router.push('/profile')" :title="title" :show-back-btn="showBackBtn"></AppHeader>
</template>

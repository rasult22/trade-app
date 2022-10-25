// back btn routes logic
import { onMounted, Ref } from 'vue'
import { useRouter } from 'vue-router'

export const useBackBtn = (showBackBtn: Ref<boolean>) => {
  const router = useRouter()
  const allowBackBtnPages = ['/result', '/profile']

  const onBackNavigate = () => {
    router.back()
  }
  onMounted(() => {
    if (allowBackBtnPages.includes(router.currentRoute.value.fullPath)) {
      showBackBtn.value = true
    }
  })
  router.beforeEach((to, from, next) => {
    allowBackBtnPages.forEach((item) => {
      if (item === to.fullPath) {
        showBackBtn.value = true
      } else {
        showBackBtn.value = false
      }
    })
    next()
  })

  return {
    onBackNavigate
  }
}

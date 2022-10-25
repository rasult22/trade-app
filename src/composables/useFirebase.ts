import { getAuth } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'
import { initApp } from 'src/firebase'
import { watch } from 'vue'
import { useUserStore } from 'src/stores/user'

export const useFirebase = () => {
  const userStore = useUserStore()
  const app = initApp()
  const auth = getAuth(app)
  const { isAuthenticated, user } = useAuth(auth)

  watch([user, isAuthenticated], ([val, val2]) => {
    userStore.user = val
    userStore.isAuthenticated = val2
  }, { immediate: true })
}

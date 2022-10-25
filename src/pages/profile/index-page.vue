<script lang="ts" setup>
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'
import { initApp } from 'src/firebase'
import { useUserStore } from 'src/stores/user'

import { ref, watch } from 'vue'
import BaseButton from 'src/ui/buttons/base-button.vue'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const tab = ref<'login' | 'register'>('login')

const app = initApp()
const auth = getAuth(app)
const { isAuthenticated, user } = useAuth(auth)

const userStore = useUserStore()
const router = useRouter()
const provider = new GoogleAuthProvider()

watch([user, isAuthenticated], ([val, val2]) => {
  userStore.user = val
  userStore.isAuthenticated = val2
}, { immediate: true })

const onBtnClick = async () => {
  if (tab.value === 'register') {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)

    console.log(userCredential)
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: 'Новый пользователь'
      })
    }
    userStore.user = userCredential.user
    console.log(userCredential)
  } else if (tab.value === 'login') {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)

    userStore.user = userCredential.user
  }
}

const onGoogleAuthenticade = async () => {
  if (!isAuthenticated.value) {
    try {
      await signInWithPopup(auth, provider)
      userStore.user = user
      userStore.isAuthenticated = isAuthenticated.value
      router.push('/')
    } catch (e) {
      alert(e?.message)
    }
  }
}

const logout = async () => {
  if (isAuthenticated.value) {
    await signOut(auth)
  }
}
</script>

<template>
  <div v-if="!isAuthenticated" class="profile-page full-width q-px-md">
    <q-tabs
    v-model="tab"
    dense
    class="text-grey"
      active-color="black"
      indicator-color="black"
      align="justify"
      narrow-indicator>
      <q-tab name="login" label="Вход"></q-tab>
      <q-tab name="register" label="Регистрация"></q-tab>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="login">
        <div class="login">
          <q-card flat bordered>
          <q-card-section>
            <q-input class="login__input" clearable filled color="black" v-model="email" label="Почта" />
            <q-input class="login__input" clearable filled color="black" v-model="password" type="password" label="Пароль" />
            <small class="login__forgot">Забыли пароль? <span>Восстановить</span></small>
          </q-card-section>
          <q-card-actions>
              <BaseButton @click="onBtnClick" black>
                Войти
              </BaseButton>
          </q-card-actions>
          </q-card>

          <BaseButton @click="onGoogleAuthenticade">
            Войти с помощью Google
          </BaseButton>
        </div>
      </q-tab-panel>
      <q-tab-panel name="register">
        <div class="register">
          <q-card flat bordered>
          <q-card-section>
            <div class="register__title text-caption">
              Введите данные для создания учетной записи
            </div>
            <q-input class="login__input" clearable filled color="black" v-model="email" label="Почта" />
            <q-input class="login__input" clearable filled color="black" v-model="password" type="password" label="Пароль" />
            <q-input class="login__input" clearable filled color="black" v-model="password" type="password" label="Подтвердите пароль" />
          </q-card-section>
          <q-card-actions>
            <BaseButton @click="onBtnClick" black>
              Отправить
            </BaseButton>
          </q-card-actions>
          </q-card>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
  <div v-else class="profile-page full-width q-px-md">
    Приветствуем, {{ user?.displayName }}!

    <div class="my-btn-wrapper">
      <BaseButton @click="logout" black> Выйти из аккаунта </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-btn-wrapper {
  width: 100%;
  position: absolute;
  bottom: 16px;
  left: 0;
  padding: 16px;
}
.profile-page {
  padding-top: 20px;
}
.login {
  padding-top: 10px;
  &__forgot {
    padding-top: 8px;œœ
    span {
      color: rgba(25, 118, 210, 1);
    }
  }
}

</style>

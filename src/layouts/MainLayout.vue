<template>
  <div class="my-constrains">
    <div class="top-black-bar" :style="`background-color: ${isDark ? 'black' : 'white' } ;`">
    </div>
    <q-layout view="lHh Lpr lFf" >
      <AppHeaderFeautre />
      <q-page-container>
        <q-page class="row justify-evenly">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import AppHeaderFeautre from 'src/features/app-layout/app-header-feautre.vue';
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<style lang="scss">
.top-black-bar {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: black;
  height: constant(safe-area-inset-top); // for iOS 11.0;
  height: env(safe-area-inset-top); // for iOS 11.2 +
}
.my-constrains {
  position: relative;
   /* for your app's header */
  padding-top: constant(safe-area-inset-top); // for iOS 11.0
  padding-top: env(safe-area-inset-top); // for iOS 11.2 +
  /* for your app's footer */
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

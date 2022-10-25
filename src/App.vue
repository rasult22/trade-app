<template>
  <router-view />
</template>

<script setup lang="ts">
import { useFirebase } from 'src/composables/useFirebase'
useFirebase()
</script>

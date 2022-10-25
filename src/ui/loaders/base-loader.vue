<script lang="ts" setup></script>

<template>
  <div class="spinner__wrapper">
    <q-spinner-cube
      class="spinner"
      color="black"
      size="3em"
    />
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  top: 66vw;
  left: 44vw;
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
  }
}
</style>

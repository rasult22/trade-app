<script lang="ts" setup>
interface Props{
  activeTag?: boolean,
  requestText: string
}
defineProps<Props>()

</script>

<template>
  <q-input outlined color="yellow-7" :bg-color="activeTag  ? 'my-yellow' : ''" class="base-input" clearable>
    <template v-slot:prepend>
      <q-icon name="add" />
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.base-input {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}
</style>

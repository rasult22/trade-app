<script setup lang="ts">
import BaseButton from '@/components/ui/button/base-button.vue'
import HabitTrackerFeature from '@/components/features/habit-tracker/habit-tracker-feature.vue'
</script>

<template>
  <div class="px-3 py-3">
    <div class="font-medium text-xl font-sans">
      Buttons
    </div>
    <div class="px-3 py-3 space-x-2 space-y-2">
      <BaseButton primary>
        primary
      </BaseButton>
      <BaseButton secondary>
        secondary
      </BaseButton>
      <BaseButton ghost>
        ghost
      </BaseButton>
      <BaseButton inverse>
        inverse
      </BaseButton>
      <BaseButton destructive>
        destructive
      </BaseButton>
      <BaseButton tinted>
        tinted
      </BaseButton>

      <BaseButton small>
        small
      </BaseButton>
      <BaseButton middle>
        middle
      </BaseButton>
    </div>
    <HabitTrackerFeature />
  </div>
</template>

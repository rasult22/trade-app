<script setup lang="ts">
import BaseButton from '@/components/ui/button/base-button.vue'
import HabitTrackerFeature from '@/components/features/habit-tracker/habit-tracker-feature.vue'
</script>

<template>
  <div class="px-3 py-3">
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
    </div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
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
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  </div>
</template>

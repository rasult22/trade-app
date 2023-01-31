<script setup lang="ts">
import { HabitItem } from './model'

const habits: HabitItem[] = [
  {
    title: 'Прочитать 1 страницу',
    progress: 50,
    days: []
  },
  {
    title: 'Отжаться 10 раз',
    progress: 0,
    days: []
  }
]
</script>

<template>
  <div class="max-w-sm space-y-3">
    <div class="flex">
      <span class="font-medium text-2xl">
        Habit
      </span>
      <span class="ml-auto">
        date
      </span>
    </div>

    <!-- habit-item -->
    <div v-for="(habit, index) in habits" :key="index"
    class="
      bg-slate-100 py-4 px-4 rounded-md
    "
    >
      <!-- top -->
      <div class="flex">
        <span class="bg-purple-400 rounded-md py-1 px-1 text-sm">
          {{ habit.progress }}%
        </span>
        <span>
          <input type="checkbox" v-for="i in 5" :key="i">
        </span>
      </div>
      <span>
        {{ habit.title }}
      </span>
    </div>
  </div>
</template>

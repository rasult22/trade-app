import { ref } from 'vue'

export interface HabitItem {
  title: string,
  progress: number,
  days: string[]
}

const habits = ref<HabitItem[]>([])

const addHabit = (habit: HabitItem) => {
  habits.value.push(habit)
}

const removeHabit = (habit: HabitItem) => {
  habits.value = habits.value.filter(h => h !== habit)
}

const markCompleted = (habit: HabitItem, date: string) => {
  const index = habits.value.findIndex(h => h === habit)
  const currentHabit = habits.value[index]
  currentHabit.days.push(date)
}

// const isCompleted

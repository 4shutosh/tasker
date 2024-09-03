<script lang="ts">
  import type { TaskItem, TaskerDayItem } from '../types/types'
  import AddTaskButton from './AddTaskButton.svelte'
  import Task from './Task.svelte'

  export let taskerDay: TaskerDayItem
  export let id: string
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Set the time of 'today' to midnight
  const comparisonDate = new Date(taskerDay.day)
  comparisonDate.setHours(0, 0, 0, 0)

  let isDateInPresentOrFuture = today.getTime() <= comparisonDate.getTime()

  export let listOfTasks: TaskItem[] = []
</script>

<div
  {id}
  class="flex flex-shrink-0 flex-col
  bg-colorSurfaceSecondary gap-2 pb-2
  w-[42vh] rounded-md"
>
  <div class="flex">
    <!-- Day header - weekday, month name, date -->
    <div class="flex flex-col">
      <div
        class={`px-2 text-xl 
              ${isDateInPresentOrFuture ? 'text-textColorPrimary' : 'text-textColorDisabled'}`}
      >
        {taskerDay.day.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>
      <div
        class={`px-2 text-sm whitespace-nowrap
              font-light
              ${isDateInPresentOrFuture ? 'text-textColorSecondary' : 'text-textColorDisabledSecondary'}`}
      >
        {taskerDay.day.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </div>
    </div>
  </div>

  <!-- Add Task Button -->
  <AddTaskButton isToday={today.getDate() == comparisonDate.getDate()} />
  <!-- List of Tasks go here -->
  {#if listOfTasks != undefined}
    <div class="flex flex-col gap-2 py-1 overflow-y-auto overflow-x-hidden">
      {#each listOfTasks as task}
        <Task {task} />
      {/each}
    </div>
  {/if}
</div>

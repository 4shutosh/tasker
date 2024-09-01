<script lang="ts">
  import type { TaskerDayItem } from '../types/types'
  import AddTaskButton from './AddTaskButton.svelte'

  export let taskerDay: TaskerDayItem
  export let id: string
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Set the time of 'today' to midnight
  const comparisonDate = new Date(taskerDay.day)
  comparisonDate.setHours(0, 0, 0, 0)

  let isDateInPresentOrFuture = today.getTime() <= comparisonDate.getTime()
</script>

<div
  {id}
  class="flex flex-shrink-0 flex-col
  bg-colorSurfaceSecondary gap-2
  w-60 rounded-md"
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
  <AddTaskButton />
  <!-- List of Tasks go here -->
</div>

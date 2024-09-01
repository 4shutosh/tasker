<script lang="ts">
  import { onMount } from 'svelte'
  import TaskerDay from './TaskerDay.svelte'
  import type { TaskItem, TaskerDayItem } from '../types/types'

  import { getAllItemsGroupedByDate } from '../database/tasksDb'

  export let isNavExpanded: boolean = true
  export let handleCollapseClick

  let tasksDateMap: Map<string, TaskItem[]>

  const today = new Date()

  let daysScroller: HTMLElement

  let daysList: TaskerDayItem[] = []
  const itemGap = 16 // gap-4 in tailwind (1rem = 16px by default)

  onMount(() => {
    daysList = getDaysFromToday()

    setTimeout(() => {
      scrollToItem(daysList)
      getAllTasksMap()
    }, 0)
  })

  function scrollToItem(list: TaskerDayItem[]): void {
    const item = document.getElementById('item-' + today.toLocaleDateString())
    const position = list.findIndex((item) => item.id == 'item-' + today.toLocaleDateString())
    if (daysScroller && item) {
      const itemWidth = item.clientWidth + itemGap
      daysScroller.scrollLeft = itemWidth * position
    }
  }

  function getDaysFromToday(): TaskerDayItem[] {
    const taskerDays: TaskerDayItem[] = []

    for (let i = -10; i <= 10; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      taskerDays.push({ id: 'item-' + date.toLocaleDateString(), day: date }) // or use .toISOString(), .toLocaleDateString(), etc.
    }

    return taskerDays
  }

  function getAllTasksMap(): void {
    let items = getAllItemsGroupedByDate()
    items
      .then((map) => {
        tasksDateMap = map
        map.forEach((value, key) => {
          console.log('found item value' + value)
          console.log('found item key ' + key)
        })
      })
      .catch((error) => {
        console.error('getting all items failed ' + error)
      })
  }
</script>

<div
  class="h-full flex flex-col overflow-hidden
  bg-colorSurfaceSecondary
  border-[0.5px] border-borderPrimary rounded"
>
  <div
    class="sticky top-0 flex px-4 items-center border-t border-b border-[0.25px] border-borderPrimary"
  >
    {#if !isNavExpanded}
      <svg
        class="mx-2 rotate-180 fill-colorOnSurface"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 20 20"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        role="presentation"
        on:click={() => handleCollapseClick()}
        ><g><rect fill="none" height="20" width="20" /></g><g
          ><g
            ><polygon points="14.94,15 16,13.94 12.06,10 16,6.06 14.94,5 9.94,10" /><polygon
              points="9,15 10.06,13.94 6.12,10 10.06,6.06 9,5 4,10"
            /></g
          ></g
        ></svg
      >
    {/if}
    <div class="px-4 py-2 text-colorOnSurface">Today</div>
  </div>

  <div
    bind:this={daysScroller}
    class="flex-1 overflow-x-auto overflow-y-hidden flex pt-5 px-2 gap-4 h-max"
  >
    {#each daysList as taskerDay}
      <TaskerDay
        {taskerDay}
        id={taskerDay.id}
        listOfTasks={tasksDateMap && taskerDay.day
          ? tasksDateMap.get(taskerDay.day.toISOString().split('T')[0])
          : undefined}
      />
    {/each}
  </div>
</div>

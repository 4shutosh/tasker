<script lang="ts">
  import { onMount } from 'svelte'
  import TaskerDay from './TaskerDay.svelte'

  export let isNavExpanded: boolean = true
  export let handleCollapseClick

  let daysList = []

  onMount(() => {
    daysList = getDaysFromToday()
  })

  function getDaysFromToday(): Date[] {
    const today = new Date()
    const days = []

    for (let i = -7; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push(date) // or use .toISOString(), .toLocaleDateString(), etc.
    }

    return days
  }
</script>

<div
  class="h-full flex flex-col overflow-hidden
  bg-colorSurfaceSecondary
  border-[0.5px] border-borderPrimary rounded"
>
  <div class="sticky top-0 flex px-4 items-center border-t border-b border-borderPrimary">
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

  <div class="flex-1 overflow-x-auto overflow-y-hidden flex pt-5 px-2 gap-2 h-max">
    {#each daysList as day}
      <TaskerDay {day} />
    {/each}
  </div>
</div>

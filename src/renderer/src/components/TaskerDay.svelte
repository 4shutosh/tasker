<script lang="ts">
  export let day: Date
  export let id: string
  const today = new Date()
  let isDateInFuture = today.getTime() <= day.getTime()
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
              ${isDateInFuture ? 'text-textColorPrimary' : 'text-textColorDisabled'}`}
      >
        {day.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>
      <div
        class={`px-2 text-sm whitespace-nowrap
              font-light 
              ${isDateInFuture ? 'text-textColorSecondary' : 'text-textColorDisabledSecondary'}`}
      >
        {day.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </div>
    </div>
  </div>

  <!-- Add Task Button -->
  <div
    class={`flex rounded
    mt-4
    px-2 py-1 items-center
    text-sm
    bg-cardBackgroundPrimary`}
  >
    <svg
      class="mr-2 fill-textColorSecondary"
      xmlns="http://www.w3.org/2000/svg"
      height="15"
      viewBox="0 -960 960 960"
      width="15"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" /></svg
    >
    <div class="text-textColorSecondary">Add a Task</div>
  </div>
  <!-- List of Tasks go here -->
</div>

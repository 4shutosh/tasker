<script lang="ts">
  export let day: Date
</script>

<div class="flex flex-shrink-0 flex-col bg-colorSurfaceSecondary w-60 rounded-md">
  <div class="flex">
    <!-- Day header - weekday, month name, date -->
    <div class="flex flex-col">
      <div class="px-2 text-xl text-textColorPrimary">
        {day.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>
      <div class="px-2 text-sm whitespace-nowrap text-textColorPrimary font-light">
        {day.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
      </div>
    </div>

    <!-- List of Tasks go here -->
  </div>
</div>

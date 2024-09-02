<script lang="ts">
  export let isNavExpanded: boolean = true
  export let handleCollapseClick
</script>

<div
  class={`flex flex-col bg-black rounded-md min-w-44 max-w-44 transition-all duration-250 ease-in-out
  ${isNavExpanded ? 'ml-0' : '-ml-44'}
`}
>
  <!-- Heading and Collapse Button -->
  <div
    class="flex px-2 py-1 mr-2 mt-1
  items-center
  cursor-pointer
  hover:bg-colorSurfaceSecondary
  rounded"
  >
    <div class="flex-1 text-neutral-300 font-light">Tasker</div>
    <svg
      class="ml-auto fill-white"
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
  </div>
</div>

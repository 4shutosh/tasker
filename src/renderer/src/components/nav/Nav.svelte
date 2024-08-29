<script lang="ts">
  export let isNavExpanded: boolean = true
  export let handleCollapseClick
</script>

{#if isNavExpanded}
  <div class="flex flex-col bg-black rounded-md">
    <!-- Heading and Collapse Button -->
    <div class="flex px-4 py-2 items-center">
      <div class="flex-1 text-neutral-300 font-light">Tasker</div>
      <svg
        class="ml-auto mx-2 fill-white"
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
{/if}

<script lang="ts">
  import { onMount } from 'svelte'

  let inputRef

  let placeholder = 'Task Description...'
  let inputValue = ''

  onMount(() => {
    setTimeout(() => {
      inputRef.focus()
    }, 0)
  })
</script>

<div class="z-50 flex flex-col w-2/5 m-8 mt-[25vh]" id="create-task-root">
  <div
    class="bg-cardBackgroundPrimary flex px-2 py-1
    rounded border-[0.5px]
    border-textColorDisabled justify-start w-fit
    text-textColorDisabled text-xs"
  >
    Add task
  </div>

  <div
    class={`flex bg-cardBackgroundPrimary flex-col mt-2 p-4 rounded-md z-10
    shadow-lg shadow-black
  `}
  >
    <div class={`flex`}>
      <input
        bind:this={inputRef}
        class={`bg-cardBackgroundPrimary 
      placeholder-textColorSecondary
      text-textColorPrimary
      text-md
      mb-4
      focus:outline-none`}
        {placeholder}
        bind:value={inputValue}
      />
    </div>

    <div class={`flex justify-end w-full gap-2`}>
      <div class={`flex items-center hover:bg-colorSurfaceSecondary px-2 py-1 rounded`}>
        <!-- <CalendarIcon /> -->
        <svg
          class="fill-textColorSecondary"
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          viewBox="0 -960 960 960"
          width="14"
          ><path
            d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm80 240v-80h400v80H280Zm0 160v-80h280v80H280Z"
          /></svg
        >
        <div class={`flex text-textColorSecondary text-xs ml-1 `}>Today</div>
      </div>
      <div
        class={`text-textColorSecondary hover:bg-colorSurfaceSecondary text-xs px-2 py-1 rounded`}
      >
        # channel
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { addTaskItem } from '../database/tasksDb'
  import type { TaskItem } from '../types/types'
  import { fetchAllTasksPerDay } from '../database/stores'

  export let closeModal

  let inputRef
  let initialHeightInputDiv

  let placeholder = 'Task Description...'
  let value = ''

  let today = new Date()

  onMount(() => {
    setTimeout(() => {
      inputRef.focus()
      initialHeightInputDiv = getComputedStyle(inputRef).height
    }, 0)
    window.addEventListener('keydown', handleKeyDown)
  })

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  function handleKeyDown(event): void {
    if (event.key === 'Enter') {
      // Add the action you want to perform when "A" is pressed
      if (inputValue != '') {
        saveItem()
      }
    } else if (event.key === 'Escape') {
      // Action for 'Escape' key press
      closeModal()
    }
  }

  function saveItem(): void {
    let item: TaskItem = {
      id: inputValue + today.toLocaleTimeString(),
      title: inputValue,
      taskTime: today,
      isCompleted: false
    }
    addTaskItem(item)
    closeModal()
    fetchAllTasksPerDay()
  }

  let parentDiv
  $: inputValue = value

  function autoGrowTextInputHeight(): void {
    if (inputRef) {
      if (inputValue === '') {
        inputRef.style.height = initialHeightInputDiv
        parentDiv.style.height = initialHeightInputDiv
      } else {
        inputRef.style.height = 'auto'
        inputRef.style.height = inputRef.scrollHeight + 'px'
        parentDiv.style.height = inputRef.scrollHeight + 'px'
      }
    }
  }

  $: if (inputValue !== undefined) autoGrowTextInputHeight()
</script>

<div class="z-50 flex flex-col w-[80vh] m-8 mt-[25vh]" id="create-task-root">
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
    <div bind:this={parentDiv} class={`flex`}>
      <textarea
        bind:this={inputRef}
        on:change={autoGrowTextInputHeight}
        bind:value={inputValue}
        rows="1"
        {placeholder}
        class={`bg-cardBackgroundPrimary 
          placeholder-textColorSecondary
          w-full resize-none overflow-hidden
          text-textColorPrimary text-lg text-wrap
          mb-4
          focus:outline-none`}
      />
    </div>

    <div class={`flex justify-end w-full gap-2`}>
      <div
        class={`flex items-center hover:bg-colorSurfaceSecondary px-2 py-1 rounded cursor-pointer`}
      >
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
        class={`text-textColorSecondary hover:bg-colorSurfaceSecondary text-xs px-2 py-1 rounded cursor-pointer`}
      >
        # channel
      </div>
    </div>
  </div>
</div>

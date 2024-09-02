<script lang="ts">
  import type { TaskItem } from '../types/types'
  import '../assets/main.css'
  export let task: TaskItem
</script>

<div
  class={`flex flex-col 
bg-cardBackgroundPrimary 
rounded py-2 px-4 
cursor-pointer
hover:outline hover:outline-textColorSecondary hover:outline-[0.25px]
shadow-sm shadow-black`}
>
  <div class={`flex text-sm text-textColorPrimary`}>{task.title}</div>
  <div class={`flex py-2`}>
    <!-- todo check why stroke-width is not working here -->
    <svg
      class="stroke-textColorSecondary hover:stroke-green-400 stroke-1 hover:stroke-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="24"
      width="24"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  </div>
</div>

<script lang="ts">
  export let isToday: boolean
</script>

<div
  class={`flex rounded group relative
mt-4 px-2 py-2
cursor-pointer
items-center justify-start
shadow-sm shadow-black
bg-cardBackgroundPrimary`}
>
  <svg
    class="mr-2 fill-textColorSecondary"
    xmlns="http://www.w3.org/2000/svg"
    height="15"
    viewBox="0 -960 960 960"
    width="15"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" /></svg
  >
  <div
    class={`text-textColorSecondary group-hover:text-textColorPrimary text-sm
  ${isToday ? 'visible' : 'invisible group-hover:visible'}`}
  >
    Add Task
  </div>
</div>

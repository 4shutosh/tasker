<script lang="ts">
  import Versions from './components/Versions.svelte'
  import electronLogo from './assets/electron.svg'
  import Nav from './components/nav/Nav.svelte'
  import Board from './components/Board.svelte'
  import CreateTaskModal from './components/CreateTaskModal.svelte'
  import { onDestroy, onMount } from 'svelte'

  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  let isNavExpanded = true
  const handleCollapseClick = (): void => {
    isNavExpanded = !isNavExpanded
  }

  let isModalVisible = false

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown)
  })

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeyDown)
  })

  function handleKeyDown(event): void {
    if (event.key === 'a' || event.key === 'A') {
      // Add the action you want to perform when "A" is pressed
      openAddTaskModal()
    } else if (event.key === 'Escape') {
      // Action for 'Escape' key press
      isModalVisible = false
    }
  }
  function openAddTaskModal(): void {
    isModalVisible = true
  }
</script>

<div class="relative p-2 bg-colorSurface h-screen w-screen">
  <div
    class={`grid h-full
      ${isNavExpanded ? 'grid-cols-[200px_1fr]' : 'grid-cols-1'}`}
  >
    <Nav {isNavExpanded} {handleCollapseClick} />
    <Board {isNavExpanded} {handleCollapseClick} />
  </div>
  {#if isModalVisible}
    <!-- <div class={`fixed inset-0 items-center justify-center bg-transparent`} id="modal-overlay"> -->
    <div class={`fixed inset-0 flex justify-center bg-transparent`} id="modal-overlay">
      <CreateTaskModal />
    </div>
  {/if}
</div>

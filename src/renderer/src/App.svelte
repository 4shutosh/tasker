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
    }
  }
  function openAddTaskModal(): void {
    isModalVisible = true
  }
  const closeAddTaskModal = (): void => {
    isModalVisible = false
  }
</script>

<div class="relative p-2 bg-colorSurface h-screen w-screen">
  <div class={`flex h-full`}>
    <Nav {isNavExpanded} {handleCollapseClick} />
    <Board {isNavExpanded} {handleCollapseClick} />
  </div>
  {#if isModalVisible}
    <!-- <div class={`fixed inset-0 items-center justify-center bg-transparent`} id="modal-overlay"> -->
    <div class={`fixed inset-0 flex justify-center bg-transparent`} id="modal-overlay">
      <CreateTaskModal closeModal={closeAddTaskModal} />
    </div>
  {/if}
</div>

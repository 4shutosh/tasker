<script lang="ts">
  import Versions from './components/Versions.svelte'
  import electronLogo from './assets/electron.svg'
  import Nav from './components/nav/Nav.svelte'
  import Board from './components/Board.svelte'

  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  let isNavExpanded = true
  const handleCollapseClick = (): void => {
    isNavExpanded = !isNavExpanded
  }
</script>

<div class="p-2 bg-colorSurface h-screen w-screen">
  <div
    class={`grid h-full
      ${isNavExpanded ? 'grid-cols-[200px_1fr]' : 'grid-cols-1'}`}
  >
    <Nav {isNavExpanded} {handleCollapseClick} />
    <Board {isNavExpanded} {handleCollapseClick} />
  </div>
</div>

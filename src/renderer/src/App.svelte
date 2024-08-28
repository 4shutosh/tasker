<script lang="ts">
  import Versions from './components/Versions.svelte'
  import electronLogo from './assets/electron.svg'

  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<!-- <img alt="logo" class="logo" src={electronLogo} /> -->
<h2>This is the Tasker app</h2>

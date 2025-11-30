<template>
  <header class="h-16 glass border-b border-slate-700/50 flex items-center justify-between px-6 diagonal-stripes">
    <div class="flex items-center gap-4">
      <span class="material-symbols-outlined text-3xl text-arctic-400">ac_unit</span>
      <h1 class="text-xl font-bold gradient-text">Ice Station.io</h1>
    </div>
    <nav class="flex items-center gap-6">
      <router-link to="/" class="text-slate-400 hover:text-white transition-colors">Overview</router-link>
      <router-link to="/stations" class="text-slate-400 hover:text-white transition-colors">Stations</router-link>
      <router-link to="/monitoring" class="text-slate-400 hover:text-white transition-colors">Monitoring</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

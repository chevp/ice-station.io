<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold gradient-text mb-2">Ice Station Overview</h1>
      <p class="text-slate-400">Monitor and manage your ice station network</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="card glass rounded-xl p-6 border border-slate-700/50">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-arctic-400 text-3xl">ac_unit</span>
          <div>
            <p class="text-slate-400 text-sm">Active Stations</p>
            <p class="text-2xl font-bold text-white">12</p>
          </div>
        </div>
      </div>

      <div class="card glass rounded-xl p-6 border border-slate-700/50">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
          <div>
            <p class="text-slate-400 text-sm">Online</p>
            <p class="text-2xl font-bold text-white">10</p>
          </div>
        </div>
      </div>

      <div class="card glass rounded-xl p-6 border border-slate-700/50">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-yellow-400 text-3xl">warning</span>
          <div>
            <p class="text-slate-400 text-sm">Warnings</p>
            <p class="text-2xl font-bold text-white">2</p>
          </div>
        </div>
      </div>

      <div class="card glass rounded-xl p-6 border border-slate-700/50">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-blue-400 text-3xl">thermostat</span>
          <div>
            <p class="text-slate-400 text-sm">Avg Temperature</p>
            <p class="text-2xl font-bold text-white">-28°C</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="glass rounded-xl p-6 border border-slate-700/50">
      <h2 class="text-xl font-semibold text-white mb-4">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50">
          <span class="material-symbols-outlined text-green-400">sensors</span>
          <div class="flex-1">
            <p class="text-white">Station Alpha - Sensor data received</p>
            <p class="text-slate-500 text-sm">2 minutes ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50">
          <span class="material-symbols-outlined text-yellow-400">thermostat</span>
          <div class="flex-1">
            <p class="text-white">Station Beta - Temperature warning</p>
            <p class="text-slate-500 text-sm">15 minutes ago</p>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50">
          <span class="material-symbols-outlined text-arctic-400">sync</span>
          <div class="flex-1">
            <p class="text-white">Station Gamma - Sync completed</p>
            <p class="text-slate-500 text-sm">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewPage'
}
</script>

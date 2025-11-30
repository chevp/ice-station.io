<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold gradient-text mb-2">Ice Stations</h1>
      <p class="text-slate-400">Manage and configure your station network</p>
    </div>

    <!-- Stations Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="station in stations" :key="station.id"
           class="card glass rounded-xl p-6 border border-slate-700/50">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <span class="material-symbols-outlined text-arctic-400 text-2xl">ac_unit</span>
            <h3 class="text-lg font-semibold text-white">{{ station.name }}</h3>
          </div>
          <span :class="statusClass(station.status)" class="px-2 py-1 rounded-full text-xs font-medium">
            {{ station.status }}
          </span>
        </div>

        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-slate-400">Location</span>
            <span class="text-white">{{ station.location }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Temperature</span>
            <span class="text-white">{{ station.temperature }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Last Update</span>
            <span class="text-white">{{ station.lastUpdate }}</span>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-slate-700/50 flex gap-2">
          <button class="flex-1 px-3 py-2 rounded-lg bg-arctic-600 hover:bg-arctic-500 text-white text-sm transition-colors">
            View Details
          </button>
          <button class="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors">
            <span class="material-symbols-outlined text-sm">settings</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StationsPage',
  data() {
    return {
      stations: [
        { id: 1, name: 'Station Alpha', location: 'Arctic Circle N', temperature: '-32°C', status: 'Online', lastUpdate: '2 min ago' },
        { id: 2, name: 'Station Beta', location: 'Arctic Circle E', temperature: '-28°C', status: 'Warning', lastUpdate: '5 min ago' },
        { id: 3, name: 'Station Gamma', location: 'Arctic Circle W', temperature: '-35°C', status: 'Online', lastUpdate: '1 min ago' },
        { id: 4, name: 'Station Delta', location: 'Antarctic S', temperature: '-42°C', status: 'Online', lastUpdate: '3 min ago' },
        { id: 5, name: 'Station Epsilon', location: 'Antarctic E', temperature: '-38°C', status: 'Offline', lastUpdate: '2 hours ago' },
        { id: 6, name: 'Station Zeta', location: 'Antarctic W', temperature: '-40°C', status: 'Online', lastUpdate: '30 sec ago' }
      ]
    }
  },
  methods: {
    statusClass(status) {
      const classes = {
        'Online': 'bg-green-500/20 text-green-400',
        'Warning': 'bg-yellow-500/20 text-yellow-400',
        'Offline': 'bg-red-500/20 text-red-400'
      }
      return classes[status] || 'bg-slate-500/20 text-slate-400'
    }
  }
}
</script>

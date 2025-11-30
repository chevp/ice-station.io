<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold gradient-text mb-2">Monitoring</h1>
      <p class="text-slate-400">Real-time station monitoring and analytics</p>
    </div>

    <!-- Metrics Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Temperature Chart Placeholder -->
      <div class="glass rounded-xl p-6 border border-slate-700/50">
        <h2 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-arctic-400">thermostat</span>
          Temperature Readings
        </h2>
        <div class="h-48 flex items-center justify-center bg-slate-800/50 rounded-lg">
          <div class="text-center text-slate-500">
            <span class="material-symbols-outlined text-4xl mb-2">show_chart</span>
            <p>Temperature chart visualization</p>
          </div>
        </div>
      </div>

      <!-- Humidity Chart Placeholder -->
      <div class="glass rounded-xl p-6 border border-slate-700/50">
        <h2 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-arctic-400">water_drop</span>
          Humidity Levels
        </h2>
        <div class="h-48 flex items-center justify-center bg-slate-800/50 rounded-lg">
          <div class="text-center text-slate-500">
            <span class="material-symbols-outlined text-4xl mb-2">bar_chart</span>
            <p>Humidity chart visualization</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Sensor Data -->
    <div class="glass rounded-xl p-6 border border-slate-700/50">
      <h2 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span class="material-symbols-outlined text-green-400">sensors</span>
        Live Sensor Data
      </h2>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="text-slate-400 border-b border-slate-700/50">
              <th class="text-left py-3 px-4">Station</th>
              <th class="text-left py-3 px-4">Temperature</th>
              <th class="text-left py-3 px-4">Humidity</th>
              <th class="text-left py-3 px-4">Wind Speed</th>
              <th class="text-left py-3 px-4">Pressure</th>
              <th class="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sensor in sensorData" :key="sensor.station"
                class="border-b border-slate-700/30 hover:bg-slate-800/50">
              <td class="py-3 px-4 text-white font-medium">{{ sensor.station }}</td>
              <td class="py-3 px-4 text-arctic-400">{{ sensor.temperature }}</td>
              <td class="py-3 px-4 text-slate-300">{{ sensor.humidity }}</td>
              <td class="py-3 px-4 text-slate-300">{{ sensor.windSpeed }}</td>
              <td class="py-3 px-4 text-slate-300">{{ sensor.pressure }}</td>
              <td class="py-3 px-4">
                <span class="flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full" :class="sensor.online ? 'bg-green-400' : 'bg-red-400'"></span>
                  <span :class="sensor.online ? 'text-green-400' : 'text-red-400'">
                    {{ sensor.online ? 'Live' : 'Offline' }}
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitoringPage',
  data() {
    return {
      sensorData: [
        { station: 'Alpha', temperature: '-32°C', humidity: '45%', windSpeed: '25 km/h', pressure: '1013 hPa', online: true },
        { station: 'Beta', temperature: '-28°C', humidity: '52%', windSpeed: '18 km/h', pressure: '1008 hPa', online: true },
        { station: 'Gamma', temperature: '-35°C', humidity: '38%', windSpeed: '32 km/h', pressure: '1015 hPa', online: true },
        { station: 'Delta', temperature: '-42°C', humidity: '41%', windSpeed: '45 km/h', pressure: '1002 hPa', online: true },
        { station: 'Epsilon', temperature: 'N/A', humidity: 'N/A', windSpeed: 'N/A', pressure: 'N/A', online: false },
        { station: 'Zeta', temperature: '-40°C', humidity: '35%', windSpeed: '28 km/h', pressure: '1010 hPa', online: true }
      ]
    }
  }
}
</script>

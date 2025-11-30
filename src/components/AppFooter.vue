<template>
  <footer class="h-10 glass border-t border-slate-700/50 flex items-center justify-between px-6 text-xs diagonal-stripes">
    <div class="flex items-center gap-4">
      <span class="text-slate-500">Ice Station.io</span>
    </div>
    <div class="flex items-center gap-4">
      <span class="text-slate-500">Status: <span class="text-green-400 font-medium">{{ systemStatus }}</span></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    systemStatus: {
      type: String,
      default: 'Online'
    }
  }
}
</script>

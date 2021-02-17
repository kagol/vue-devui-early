<template>
  <div>
    tab
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-tab',
  props: {
    id: String,
    title: String,
    tabId: String,
  }
})
</script>
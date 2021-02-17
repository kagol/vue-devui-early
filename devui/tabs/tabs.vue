<template>
  <div>
    tabs
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-tabs',
  props: {
    showContent: Boolean,
  },
  emits: ['activeTabChange']
})
</script>
<template>
  <div>
    devui codebox
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-codebox',
  props: {
    sourceData: Object
  }
})
</script>
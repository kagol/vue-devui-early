<template>
  <div class="main">
    <div class="docs-header">
      <h1>{{ data.name || componentName }} {{ data.cnName }}</h1>
      <div style="margin-bottom: 40px;">{{ data.description }}</div>
      <div v-if="data.tmw">
        <h3>何时使用</h3>
        <div style="margin-bottom: 20px;" v-html="data.tmw"></div>
      </div>
      <!-- TODO: d-tabs -->
    </div>
    <div class="examples-viewer">
      <div class="examples-viewer-wrapper">
        <!-- TODO: Demo列表 -->
        <d-button-demo></d-button-demo>
      </div>
    </div>
  </div>
</template>

<script>
import DevUIButtonDemo from '../../devui/button/demo/button-demo.vue'

export default {
  name: 'app-demo-cell',
  components: {
    'd-button-demo': DevUIButtonDemo
  },
  data() {
    return {
      data: {},
      componentName: ''
    };
  },
  mounted() {
    this.data = this.$route.meta;
  },
}
</script>
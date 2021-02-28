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
      <d-tabs :showContent="false" :activeTab="componentTab" @activeTabChange="activeTabChange($event)">
        <d-tab id="demo" title="Demo" tabId="demo"></d-tab>
        <d-tab id="api" title="API" tabId="api"></d-tab>
      </d-tabs>
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
import ButtonDemo from '../../devui/button/demo/button-demo.vue'
import Tabs from '../../devui/tabs/tabs.vue'
import Tab from '../../devui/tabs/tab.vue'

export default {
  name: 'app-demo-cell',
  components: {
    'd-button-demo': ButtonDemo,
    'd-tabs': Tabs,
    'd-tab': Tab,
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
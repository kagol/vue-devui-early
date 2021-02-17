<template>
  <div class="demo-container">
    <div class="demo-example">
      <div class="demo-title">{{ '主要按钮' }}</div>
      <div class="demo-text"></div>
      <d-codebox id="components-button-primary" :sourceData="primarySource">
        <d-button-primary demo></d-button-primary>
      </d-codebox>
    </div>
    <div class="demo-example">
      <div class="demo-title">{{ '次要按钮' }}</div>
      <div class="demo-text"></div>
      <d-codebox id="components-button-common" :sourceData="commonSource">
        <d-button-common demo></d-button-common>
      </d-codebox>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import DevUICodeBox from '../../shared/devui-codebox/devui-codebox.vue'
import DevUIButtonPrimary from './primary/primary.vue'
import DevUIButtonCommon from './common/common.vue'

export default defineComponent({
  name: 'd-button-demo',
  components: {
    'd-codebox': DevUICodeBox,
    'd-button-primary': DevUIButtonPrimary,
    'd-button-common': DevUIButtonCommon,
  }
})
</script>
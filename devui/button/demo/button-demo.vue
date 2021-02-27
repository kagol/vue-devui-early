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
import CodeBox from '../../shared/devui-codebox/devui-codebox.vue'
import ButtonPrimary from './primary/primary'
import ButtonCommon from './common/common'

export default defineComponent({
  name: 'd-button-demo',
  components: {
    'd-codebox': CodeBox,
    'd-button-primary': ButtonPrimary,
    'd-button-common': ButtonCommon,
  },
  setup() {
    const primarySource = {};
    const commonSource = {};
    return {
      primarySource,
      commonSource
    }
  }
})
</script>
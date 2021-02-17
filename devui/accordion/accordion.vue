<template>
  <div>accordion</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-accordion',
  props: {
    data: Object,
    linkType: String
  },
  setup(props) {
    const { data, linkType } = props;
    console.log('props:', props);
    console.log('data:', data);
    console.log('linkType:', linkType);
  }
})
</script>
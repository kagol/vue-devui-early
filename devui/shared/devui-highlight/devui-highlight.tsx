import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-highlight',
  props: {
  },
  setup(props, ctx) {
    return () => {
      return <div>devui-highlight</div>
    }
  }
})
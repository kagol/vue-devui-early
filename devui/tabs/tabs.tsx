import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-tabs',
  props: {
  },
  setup(props, ctx) {
    return () => {
      return <div>devui-tabs{ctx.slots.default?.()}</div>
    }
  }
})
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-tab',
  props: {
  },
  setup(props, ctx) {
    return () => {
      return <div>{ctx.slots.default?.()}</div>
    }
  }
})
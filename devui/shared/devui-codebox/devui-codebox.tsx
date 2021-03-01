import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-codebox',
  props: {
    id: String,
    sourceData: Object
  },
  setup(props, ctx) {
    return () => {
      return <div>
        devui-codebox
        {ctx.slots.default?.()}
      </div>
    }
  }
})
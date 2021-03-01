import { defineComponent } from 'vue'

export default defineComponent({
  name: 'd-api',
  props: {
  },
  setup(props, ctx) {
    return () => {
      return <div>devui-api</div>
    }
  }
})
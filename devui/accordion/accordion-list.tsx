import { defineComponent } from 'vue'
import { AccordionMenuItem, AccordionMenuType } from './accordion.type'

export default defineComponent({
  name: 'd-accordion-list',
  props: {
    data: {
      type: Array as () => AccordionMenuType
    },
    deepth: {
      type: Number,
      default: 0
    },
    parent: {
      type: Object as () => AccordionMenuItem
    }
  },
  setup(props, ctx) {
    const { data, deepth, parent } = props;
    console.log('accordion list data:', data);

    return () => {
      return <ul>
        { data.map(category => {
          return <li class="devui-accordion-item" key={ category.title }>
            { category.title }
          </li>
        }) }
      </ul>
    }
  }
})
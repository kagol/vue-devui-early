import { defineComponent } from 'vue'
import './accordion.scss'

export default defineComponent({
  name: 'd-accordion',
  props: {
    data: Object,
    linkType: String,
    innerListTemplate: Boolean,
    deepth: Number,
    open: Boolean, 
    childActived: Boolean, 
    disabled: Boolean,
    toggle: Function as unknown as () => ((event: MouseEvent) => void)
  },
  setup(props) {
    const { data, linkType, innerListTemplate, deepth, open, childActived, disabled, toggle } = props;
    console.log('props:', props);
    console.log('data:', data);
    console.log('linkType:', linkType);

    return () => {
      return (!innerListTemplate || deepth === 0) ? <ul class="devui-accordion-list">
        { data.map(category => {
          return <li class="devui-accordion-item" key={category.title}>
            <div
              class={`devui-accordion-item-title devui-over-flow-ellipsis ${open?'open':''} ${childActived?'active':''} ${disabled?'disabled':''}`}
              title={category.title}
              onClick={toggle}
            >
              <div
                class={`devui-accordion-splitter ${deepth === 0?'devui-parent-list':''}`}
                style={{ left: deepth * 20 + 10 + 'px' }}
              ></div>
              { category.title }
            </div>
            <ul class="devui-accordion-submenu">
              { category.children.map(component => {
                return <li class="devui-accordion-item" key={component.title}>
                  <router-link to={component.link}>{ component.title }</router-link>
                </li>
              })}
            </ul>
          </li>
        }) }
      </ul> : null
    }
  }
})
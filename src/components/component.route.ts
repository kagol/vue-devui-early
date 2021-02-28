import ExamplePanelComponent from './app-demo-cell.vue';
import GetStartedComponent from './app-demo-cell.vue';
import ColorComponent from './app-demo-cell.vue';
import ThemeGuideComponent from './app-demo-cell.vue';

import accordionRoutes from '../../devui/accordion/demo/accordion.route'
import buttonRoutes from '../../devui/button/demo/button.route'

export const routesConfig = [
  {
    path: '',
    redirect: '/components/button',
    pathMatch: 'full',
    meta: {},
  },
  {
    path: 'get-start',
    component: GetStartedComponent,
    meta: { nodisplay: true },
  },
  {
    path: 'color',
    component: ColorComponent,
    meta: {nodisplay: true}
  },
  {
    path: 'theme-guide',
    component: ThemeGuideComponent,
    meta: { nodisplay: true },
  },
  {
    path: 'accordion',
    component: ExamplePanelComponent,
    children: accordionRoutes,
    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'Accordion',
      cnName: '手风琴',
    },
  },
  {
    path: 'alert',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Alert',
      cnName: '警告',
    },
  },
  {
    path: 'anchor',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'Anchor',
      cnName: '锚点',
    },
  },
  {
    path: 'auto-complete',
    component: ExamplePanelComponent,


    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'AutoComplete',
      cnName: '自动补全',
    },
  },
  {
    path: 'avatar',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Avatar',
      cnName: '头像',
    },
  },
  {
    path: 'ImagePreview',
    component: ExamplePanelComponent,


    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'ImagePreview',
      cnName: '图片预览',
    },
  },
  {
    path: 'breadcrumb',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'Breadcrumb',
      cnName: '面包屑',
    },
  },
  {
    path: 'back-top',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'BackTop',
      cnName: '回到顶部',
    },
  },
  {
    path: 'button',
    component: ExamplePanelComponent,
    children: buttonRoutes,
    meta: {
      name: 'Button',
      cnName: '按钮',
    },
  },
  {
    path: 'badge',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Badge',
      cnName: '徽标',
    },
  },
  {
    path: 'card',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Card',
      cnName: '卡片',
    },
  },
  {
    path: 'carousel',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Carousel',
      cnName: '走马灯',
    },
  },
  {
    path: 'checkbox',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'CheckBox',
      cnName: '复选框',
    },
  },
  {
    path: 'common',
    component: ExamplePanelComponent,

    meta: {
      name: 'Common',
      cnName: '公共方法',
    },
  },
  {
    path: 'datatable',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'DataTable',
      cnName: '表格',
    },
  },
  {
    path: 'datepicker',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'DatePicker',
      cnName: '日期选择器',
    },
  },
  {
    path: 'multi-auto-complete',
    component: ExamplePanelComponent,


    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'MultiAutoComplete',
      cnName: '多项自动补全',
    },
  },
  {
    path: 'form',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Form',
      cnName: '表单',
    },
  },
  {
    path: 'fullscreen',
    component: ExamplePanelComponent,

    meta: {
      name: 'Fullscreen',
      cnName: '全屏',
    },
  },
  {
    path: 'transfer',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Transfer',
      cnName: '穿梭框',
    },
  },
  {
    path: 'dragdrop',
    component: ExamplePanelComponent,

    meta: {
      name: 'DragDrop',
      cnName: '拖拽',
    },
  },
  {
    path: 'drawer',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Drawer',
      cnName: '抽屉板',
    },
  },
  {
    path: 'dropdown',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'DropDown',
      cnName: '下拉菜单',
    },
  },
  {
    path: 'editable-select',
    component: ExamplePanelComponent,


    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'EditableSelect',
      cnName: '可输入下拉选择框',
    },
  },
  {
    path: 'loading',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Loading',
      cnName: '加载提示',
    },
  },
  {
    path: 'modal',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Modal',
      cnName: '模态弹窗',
    },
  },
  {
    path: 'pagination',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'Pagination',
      cnName: '分页',
    },
  },
  {
    path: 'panel',
    component: ExamplePanelComponent,

    meta: {
      name: 'Panel',
      cnName: '面板',
    },
  },
  {
    path: 'popover',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Popover',
      cnName: '悬浮提示',
    },
  },
  {
    path: 'progress',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Progress',
      cnName: '进度条',
    },
  },
  {
    path: 'quadrant-diagram',
    component: ExamplePanelComponent,


    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Quadrant Diagram',
      cnName: '象限图',
    },
  },
  {
    path: 'radio',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Radio',
      cnName: '单选框',
    },
  },
  {
    path: 'rate',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Rate',
      cnName: '等级评估',
    },
  },
  {
    path: 'search',
    component: ExamplePanelComponent,

    meta: {
      name: 'Search',
      cnName: '搜索框',
    },
  },
  {
    path: 'select',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Select',
      cnName: '下拉选择框',
    },
  },
  {
    path: 'cascader',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Cascader',
      cnName: '级联菜单',
    },
  },
  {
    path: 'status',
    component: ExamplePanelComponent,

    meta: {
      name: 'Status',
      cnName: '状态',
    },
  },
  {
    path: 'sticky',
    component: ExamplePanelComponent,

    meta: {
      name: 'Sticky',
      cnName: '便贴',
    },
  },
  {
    path: 'tabs',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'Tabs',
      cnName: '选项卡切换',
    },
  },
  {
    path: 'tags',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Tags',
      cnName: '标签',
    },
  },
  {
    path: 'tags-input',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'TagsInput',
      cnName: '标签输入',
    },
  },
  {
    path: 'time-axis',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'TimeAxis',
      cnName: '时间轴',
    },
  },
  {
    path: 'toast',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Toast',
      cnName: '全局通知',
    },
  },
  {
    path: 'tooltip',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'Tooltip',
      cnName: '提示',
    },
  },
  {
    path: 'read-tip',
    component: ExamplePanelComponent,

    meta: {
      type: '反馈',
      enType: 'Feedback',
      name: 'ReadTip',
      cnName: '阅读提示',
      description: '阅读提示组件。',
      tmw: `当html文档中需要对特定内容进行提示时使用。`,
    },
  },
  {
    path: 'toggle',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Toggle',
      cnName: '开关',
    },
  },
  {
    path: 'tree',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Tree',
      cnName: '树',
    },
  },
  {
    path: 'upload',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Upload',
      cnName: '上传',
    },
  },
  {
    path: 'input-number',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'InputNumber',
      cnName: '数字输入框',
    },
  },
  {
    path: 'tree-select',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'TreeSelect',
      cnName: '树形选择框',
    },
  },
  {
    path: 'slider',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Slider',
      cnName: '滑动输入条',
    },
  },
  {
    path: 'splitter',
    component: ExamplePanelComponent,

    meta: {
      type: '布局',
      enType: 'Layout',
      name: 'Splitter',
      cnName: '分割器',
    },
  },
  {
    path: 'layout',
    component: ExamplePanelComponent,

    meta: {
      type: '布局',
      enType: 'Layout',
      name: 'Layout',
      cnName: '布局',
    },
  },
  {
    path: 'gantt',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'Gantt',
      cnName: '甘特图',
    },
  },
  {
    path: 'text-input',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'TextInput',
      cnName: '文本框',
    },
  },
  {
    path: 'textarea',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'Textarea',
      cnName: '多行文本框',
    },
  },
  {
    path: 'steps-guide',
    component: ExamplePanelComponent,

    meta: {
      type: '导航',
      enType: 'Navigation',
      name: 'StepsGuide',
      cnName: '操作指引',
    },
  },
  {
    path: 'time-picker',
    component: ExamplePanelComponent,

    meta: {
      type: '数据录入',
      enType: 'Data Entry',
      name: 'TimePicker',
      cnName: '时间选择器',
    },
  },
  {
    path: 'relative-time',
    component: ExamplePanelComponent,

    meta: {
      type: '数据展示',
      enType: 'Data Display',
      name: 'RelativeTime',
      cnName: '人性化时间转换',
    },
  },
];

export default routesConfig;

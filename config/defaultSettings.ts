import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  fixedHeader: true,
  fixSiderbar: true,
  contentWidth: 'Fluid',
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Odaka',
  logo: './icons/icon-192x192.png',
  pwa: false,
  iconfontUrl: '',
  collapsed: true,
} as LayoutSettings & {
  pwa: boolean;
  collapsed: boolean;
};

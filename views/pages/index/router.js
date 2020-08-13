import loadable from '@loadable/component'

const serverRouter = [
  { 
    path: '/index',
    exact: true,
    component: loadable(() => import('./components/index/index.jsx')),
    name: 'index',
    title: '主页',
  },
  { 
    path: '/add',
    exact: true,
    component: loadable(() => import('./components/add/index.jsx')),
    name: 'index',
    title: '添加',
  },
  { 
    path: '/detail',
    exact: true,
    component: loadable(() => import('./components/detail/index.jsx')),
    name: 'index',
    title: '添加',
  },
];

export default serverRouter;


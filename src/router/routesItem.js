export const routes = [
  {
      path: '/',
      component: () => import('@/layout/defaultLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'd3',
          name: 'd3',
          component: () => import('@/views/D3IntroView.vue'),
          children: [
            { path: 'line-charts', name: 'LineCharts', component: ()=>  import('@/views/D3IntroView/LineCharts.vue') },
            { path: 'line-chart-component', name: 'LineChartComponent', component: ()=>  import('@/views/D3IntroView/LineChartComponent.vue') },
            { path: 'bar-charts', name: 'BarCharts', component: ()=>  import('@/views/D3IntroView/BarCharts.vue') },
            { path: 'maps', name: 'Maps', component: ()=>  import('@/views/D3IntroView/Maps.vue') },
          ]
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        },
        {
          path: 'enterprise',
          name: 'enterprise',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/views/EnterpriseView.vue')
        },
      ],
  },
  {
    path: '/',
    component: () => import('@/layout/errorPageLayout.vue'),
    children: [
      {
        path: 'IdentityDenyView',
        name: 'IdentityDenyView',
        component: () => import('@/views/IdentityDenyView.vue')
      },
      {
        path: ':pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/PageNotFound.vue')
      },
    ],
  }
]
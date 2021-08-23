const routes = [
  {
    path: '/',
    //component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/login.vue'),
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue') /*()=>import延迟加载*/
      },
      {
        path: '/table',
        component: () => import('pages/table.vue') /*()=>import延迟加载*/
      },
      {
        path: '/form',
        component: () => import('pages/form.vue') /*()=>import延迟加载*/
      },
      {
        path: '/list',
        component: () => import('pages/list.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xjxm',
        component: () => import('pages/xmgl/xjxm.vue') /*()=>import延迟加载*/
      }, 
      {
        path: '/xmwg',
        component: () => import('pages/xmgl/xmwg.vue') /*()=>import延迟加载*/
      },      
      {
        path: '/xgxm',
        component: () => import('pages/xmgl/xgxm.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xmcx',
        component: () => import('pages/xmgl/xmcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xgxm_xg',
        component: () => import('pages/xmgl/xgxm_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/htwj',
        component: () => import('pages/htgl/htwj.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xght_xg',
        component: () => import('pages/htgl/xght_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xjht',
        component: () => import('pages/htgl/xjht.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xght',
        component: () => import('pages/htgl/xght.vue') /*()=>import延迟加载*/
      },
      {
        path: '/htcx',
        component: () => import('pages/htgl/htcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xjfp',
        component: () => import('pages/fpgl/xjfp.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xgfp',
        component: () => import('pages/fpgl/xgfp.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fpcx',
        component: () => import('pages/fpgl/fpcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xgfp_xg',
        component: () => import('pages/fpgl/xgfp_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fptj',
        component: () => import('pages/fpgl/fptj.vue') /*()=>import延迟加载*/
      },
      {
        path: '/zjrl',
        component: () => import('pages/zjgl/zjrl.vue') /*()=>import延迟加载*/
      },
      {
        path: '/zjfp',
        component: () => import('pages/zjgl/zjfp.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xmtj',
        component: () => import('pages/tjfx/xmtj.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fptj1',
        component: () => import('pages/tjfx/fptj.vue') /*()=>import延迟加载*/
      },
      {
        path: '/zcfx',
        component: () => import('pages/tjfx/zcfx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/srfx',
        component: () => import('pages/tjfx/srfx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xmtz',
        component: () => import('pages/tjfx/xmtz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/cbtz1',
        component: () => import('pages/tjfx/cbtz1.vue') /*()=>import延迟加载*/
      },
      {
        path: '/sk',
        component: () => import('pages/zjgl/sk.vue') /*()=>import延迟加载*/
      },
      {
        path: '/skcx',
        component: () => import('pages/zjgl/skcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fk',
        component: () => import('pages/zjgl/fk.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fkcx',
        component: () => import('pages/zjgl/fkcx.vue') /*()=>import延迟加载*/
      },
            {
        path: '/zjfp',
        component: () => import('pages/zjgl/zjfp.vue') /*()=>import延迟加载*/
      },
      {
        path: '/zjrl',
        component: () => import('pages/zjgl/zjrl.vue') /*()=>import延迟加载*/
      },
      {
        path: '/khgys',
        component: () => import('pages/xtsz/khgys.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xt_xz',
        component: () => import('pages/xtsz/xt_xz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xt_xg',
        component: () => import('pages/xtsz/xt_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/yhgl',
        component: () => import('pages/xtsz/yhgl.vue') /*()=>import延迟加载*/
      },
      {
        path: '/yhgl_xz',
        component: () => import('pages/xtsz/yhgl_xz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/yhgl_xg',
        component: () => import('pages/xtsz/yhgl_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/cbfpbxd',
        component: () => import('pages/djgl/cbfpbxd.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fksqd',
        component: () => import('pages/djgl/fksqd.vue') /*()=>import延迟加载*/
      },
      {
        path: '/cbfpbxdcx',
        component: () => import('pages/djgl/cbfpbxdcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fksqdcx',
        component: () => import('pages/djgl/fksqdcx.vue') /*()=>import延迟加载*/
      },
      {
        path: '/lspz',
        component: () => import('pages/xtsz/lspz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/cbfpbxd_xg',
        component: () => import('pages/djgl/cbfpbxd_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/pzsc',
        component: () => import('pages/djgl/pzsc.vue') /*()=>import延迟加载*/
      },
      {
        path: '/sk_xg',
        component: () => import('pages/zjgl/sk_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fphz',
        component: () => import('pages/tjfx/fphz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/fksqd_xg',
        component: () => import('pages/djgl/fksqd_xg.vue') /*()=>import延迟加载*/
      },
      {
        path: '/khgystz',
        component: () => import('pages/tjfx/khgystz.vue') /*()=>import延迟加载*/
      },
      {
        path: '/glfqd',
        component: () => import('pages/tjfx/glfqd.vue') /*()=>import延迟加载*/
      },
      {
        path: '/xmlxwh',
        component: () => import('pages/xtsz/xmlxwh.vue') /*()=>import延迟加载*/
      },
      {
        path: '/sglxwh',
        component: () => import('pages/xtsz/sglxwh.vue') /*()=>import延迟加载*/
      },
   
    ]

  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

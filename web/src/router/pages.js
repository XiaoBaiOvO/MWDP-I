export default [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/webpage/main/Index')
        // component: () => import('../views/webpage/service/NetDisk')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/webpage/main/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/webpage/main/Register')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home')
    },
    {
      path: '/testpage',
      name: 'TestPage',
      component: () => import('../views/webpage/testpage/TestPage')
    },
    {
        path: '/netdisk',
        name: 'NetDisk',
        component: () => import('../views/webpage/service/NetDisk')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../views/webpage/basictools/Calendar'),
    },
    {
        path: '/testingpage',
        name: 'TestingPage',
        component: () => import('../views/webpage/testpage/TestPage2'),
    },
];
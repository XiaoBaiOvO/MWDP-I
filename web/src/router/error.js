export default [
    {
        path: '/error/404',
        name: '404',
        component: () => import('../views/errorpage/404')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/webpage/main/Login')
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
];
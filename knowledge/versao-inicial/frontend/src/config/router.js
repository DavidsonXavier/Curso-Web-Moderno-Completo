import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import adminPages from '../components/admin/adminPages'
import ArticleByCategory from '../components/article/ArticleByCategory'
import ArticleById from '../components/article/ArticleById'
import Auth from '../components/auth/Auth'
import {userKey} from '@/global';

Vue.use(VueRouter)

const routes = [{
    name:'home',
    path: '/',
    component: Home,
},{
    name:'adminPages',
    path: '/admin',
    component: adminPages,
    meta: {
        requiresAdmin: true
    }
},
{
    name:'ArticleByCategory',
    path:'/categories/:id/articles',
    component: ArticleByCategory
},
{
    name:'ArticleById',
    path:'/articles/:id',
    component: ArticleById
},
{
    name:'Auth',
    path:'/auth',
    component: Auth
}


]
const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)

        user && user.admin ? next() : next({ path: '/'})
    }
    else {
        next()
    }
})

export default router
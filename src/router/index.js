/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:17:13 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2023-01-12 02:17:13 
 */



import { createRouter, createWebHistory } from 'vue-router'
import AddList from '../views/AddListView.vue';
import ListView from '../views/ListView.vue'; 
import EditView from '../views/EditView.vue'; 
import LoginView from '../views/LoginView.vue'; 
import CategoryView from '../views/CategoriesView.vue';
import SingleCategoryView from '../views/SingleCategoryView.vue';
import AddCategoryView from '../views/AddCategoryView.vue';
import AddMember from '../views/AddMember.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token")) {
          next()
        } else {
          next('/login');
        }
      }
    },
    {
      path: "/addlist",
      name: "addlist",
      component: AddList,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token")) {
          next()
        } else {
          next('/login');
        }
      }
      
    }
    ,{
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("token")) {
          next()
        } else {
          next('/login');
        }
      }
    },
    {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next()
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/singlecategory/:id',
    name: 'singlecategory',
    component: SingleCategoryView,
    props: true,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next()
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/addcategory',
    name: 'addcategory',
    component: AddCategoryView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next()
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/addmember',
    name: 'addmember',
    component: AddMember,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next()
      } else {
        next('/login');
      }
    }
  },
  ]
})

export default router

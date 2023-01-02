import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AddList from '../views/AddListView.vue';
import ListView from '../views/ListView.vue'; 
import EditView from '../views/EditView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/addlist",
      name: "addlist",
      component: AddList,
      
    },
    {
      path: "/list",
      name: "list",
      component: ListView,
      
    },{
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
      props: true
    }
  ]
})

export default router

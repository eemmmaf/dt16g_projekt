/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2023-01-12 02:18:57 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2023-01-12 02:18:57 
 */


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/main.css";
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

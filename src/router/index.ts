import { createRouter, createWebHistory } from 'vue-router'
import LoginAdmin from '../page/loginadmin.vue'

// จุดที่ 1: นำเข้าไฟล์ AdminDashboard ที่เราเพิ่งสร้าง
import AdminDashboard from '../page/AdminLogout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'loginadmin',
      component: LoginAdmin
    },
    // จุดที่ 2: เพิ่ม Route ใหม่สำหรับหน้า Dashboard
    {
      path: '/Logout', // ตั้งชื่อ URL ว่า /dashboard
      name: 'AdminLogout',
      component: AdminDashboard
    }
  ]
})

export default router
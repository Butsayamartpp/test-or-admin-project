import { createRouter, createWebHistory } from 'vue-router'

// จุดที่ 1: นำเข้าไฟล์ loginadmin.vue จากโฟลเดอร์ page
import LoginAdmin from '../page/loginadmin.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... (Route หน้าอื่นๆ ที่คุณอาจจะมีอยู่แล้ว เช่น หน้า Home) ...

    // จุดที่ 2: เพิ่ม Route ใหม่สำหรับหน้า Login
    {
      path: '/login', // กำหนด URL ที่ต้องการให้เข้าถึง (เช่น เปลี่ยนเป็น /login-admin ก็ได้)
      name: 'loginadmin',
      component: LoginAdmin
    }
  ]
})

export default router
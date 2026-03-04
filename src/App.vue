<template>
  <router-view />
</template>

<script setup lang="ts">
// นำเข้า RouterView เพื่อให้ใช้งานแท็กด้านบนได้ (ในบางโปรเจกต์อาจไม่ต้อง import ก็ใช้งานได้เลย)
import { RouterView } from 'vue-router'
</script>

<style>
/* บังคับให้หน้าเว็บไม่มีขอบขาวๆ และใช้พื้นที่เต็ม 100% */
#app {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
}

body {
  margin: 0;
  padding: 0;
}
</style>
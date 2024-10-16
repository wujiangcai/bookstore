<template>
  <nav class="nav">
    <router-link to="/user/profile">用户信息</router-link>
    <router-link to="/user/setting">用户设置</router-link>
  </nav>
  
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; // 引入 useRouter，如果需要可以保留
</script>

<style scoped>
.nav {
  margin: 10px;
}
a {
  margin: 20px 10px;
  text-decoration: none;
  color: #3baee0;
  padding: 5px 10px;
}
/* 自定义路由激活样式 */
.router-link-active {
  font-weight: bold;
  color: white;
  background-color: #3baee0;
}
</style>

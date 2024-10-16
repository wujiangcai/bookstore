<template>
  <div>
<h3>用户信息设置</h3>
<button @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const route = useRouter();
const handleLogout = ()=>{
  localStorage.removeItem("isLoggedIn");
  route.push("/login")
}
</script>

<style scoped>

</style>
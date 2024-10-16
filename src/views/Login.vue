<template>
  <div class="login-container">
    <div class="form-container">
      <h1>欢迎登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 引入 useRouter

const username = ref('');
const password = ref('');
const router = useRouter(); // 获取路由实例

const handleLogin = () => {
  // 登录逻辑
  localStorage.setItem('isLoggedIn', 'true');
  router.push('/books'); // 登录后跳转到购物车
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h1 {
  text-align: center;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.7rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.books-info {
  margin-top: 2rem;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
}

.books-info h2 {
  margin-bottom: 0.5rem;
  text-align: center;
}

.books-info ul {
  list-style: none;
  padding: 0;
}

.books-info li {
  margin: 0.5rem 0;
}
</style>

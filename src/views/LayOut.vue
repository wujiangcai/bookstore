<template>
  <nav>
    <div class="router">
    <router-link to="/books">书籍列表</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/user">我的</router-link>
  </div>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <router-view>
    
  </router-view> -->
</template>

<style scoped>
/* 定义路由导航样式 */
a {
  margin: 10px;
  text-decoration: none;
  color: #3baee0; /* 更正了颜色值中的字符错误 */
  padding: 5px 10px;
}

/* 自定义路由激活样式 */
.router-link-active {
  background-color: #3baee0; 
  color: white; /* 更正了颜色值中的字符错误 */
  font-weight: bold;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.router{
  text-align: center;
}

</style>

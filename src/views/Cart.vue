<template>
  <div class="cart-container">
    <h1>购物车</h1>
    
    <!-- 添加书籍到购物车的表单 -->
    <div class="add-book-form">
      <h2>添加新书籍</h2>
      <input v-model="newBookTitle" type="text" placeholder="书籍标题" />
      <input v-model="newBookPrice" type="number" placeholder="书籍价格" min="0" step="0.01" />
      <button @click="addToCart" :disabled="!newBookTitle || !newBookPrice">添加</button>
    </div>

    <!-- 显示购物车列表 -->
    <ul v-if="cart.length > 0" class="cart-list">
      <li v-for="(book, index) in cart" :key="book.id" class="cart-item">
        <span class="book-title">{{ book.title }} - ¥{{ book.price.toFixed(2) }}</span>
        <button class="remove-button" @click="removeFromCart(index)">删除</button>
      </li>
    </ul>
    <p v-else>购物车为空</p>
    
    <!-- 显示总价 -->
    <div v-if="cart.length > 0" class="total-price">
      总价: ¥{{ totalPrice.toFixed(2) }}
    </div>

    <!-- <router-link to="/orders" class="orders-link">查看订单</router-link> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';

const cart = ref([]);
const newBookTitle = ref(''); // 用户输入的新书籍标题
const newBookPrice = ref(0); // 用户输入的新书籍价格

// 从本地存储加载购物车
onMounted(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.value = JSON.parse(savedCart);
  }
});

// 计算总价
const totalPrice = computed(() => {
  return cart.value.reduce((total, book) => total + book.price, 0);
});

// 添加新书籍到购物车
const addToCart = () => {
  const newBook = {
    id: Date.now(), // 使用当前时间戳作为唯一ID
    title: newBookTitle.value,
    price: parseFloat(newBookPrice.value) // 将价格转换为数字
  };
  cart.value.push(newBook);
  localStorage.setItem('cart', JSON.stringify(cart.value));
  newBookTitle.value = ''; // 清空输入框
  newBookPrice.value = 0; // 清空价格输入框
};

// 删除购物车中的书籍
const removeFromCart = (index: number) => {
  cart.value.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart.value));
};
</script>

<style scoped>
.cart-container {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.add-book-form {
  margin-bottom: 2rem;
}

.add-book-form input {
  padding: 0.5rem;
  font-size: 16px;
  width: 30%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-book-form button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-book-form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.add-book-form button:hover:not(:disabled) {
  background-color: #45a049;
}

.cart-list {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}

.book-title {
  font-size: 16px;
  color: #333;
}

.remove-button {
  background-color: #ff4d4f;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #ff7875;
}

.total-price {
  font-size: 18px;
  margin-top: 1rem;
  font-weight: bold;
  color: #333;
}

.orders-link {
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #007bff;
  text-decoration: none;
}

.orders-link:hover {
  text-decoration: underline;
}
</style>

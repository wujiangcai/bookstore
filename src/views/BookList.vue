<template>
  <div class="book-list">
    <h1>书籍列表</h1>
    <router-link to="/cart" class="cart-link">查看购物车</router-link>
    <ul class="book-items">
      <li v-for="book in books" :key="book.id" class="book-item">
        <router-link :to="`/books/${book.id}`" class="book-title">
          {{ book.title }}
        </router-link>
        <div class="book-info">
          <p><strong>作者：</strong>{{ book.author }}</p>
          <p><strong>出版日期：</strong>{{ book.publishDate }}</p>
          <p><strong>ISBN：</strong>{{ book.isbn }}</p>
          <p><strong>价格：</strong>¥{{ book.price }}</p>
          <p><strong>简介：</strong>{{ book.description }}</p>
          <button @click="addToCart(book)">添加到购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const books = ref([
    {
      id: 1,
      title: '《1984》',
      author: '乔治·奥威尔 (George Orwell)',
      publishDate: '1949-06-08',
      isbn: '978-0-452-28423-4',
      cover: '../assets/1984.png',
      price: 30,
      description: '《1984》是一本反乌托邦小说，设定在一个高度集权的未来世界。故事围绕主人公温斯顿·史密斯展开，他在一个控制一切的党派统治下努力寻求真相和自由。小说探讨了权力、控制和个人自由之间的关系，提出了对极权主义的深刻批判。',
    },
    {
      id: 2,
      title: '《百年孤独》',
      author: '加布里埃尔·加西亚·马尔克斯 (Gabriel García Márquez)',
      publishDate: '1967-05-30',
      isbn: '978-0-06-088328-7',
      cover: '../assets/傲慢与偏见.png',
      price: 40,
      description: '这部小说讲述了布恩迪亚家族七代人的传奇故事，背景设定在虚构的小镇马孔多。通过充满魔幻色彩的叙述，展现了人类的孤独、爱情、战争和历史的循环。书中的魔幻现实主义风格，使其成为拉丁美洲文学的重要作品。',
    },
    {
      id: 3,
      title: '《傲慢与偏见》',
      author: '简·奥斯汀 (Jane Austen)',
      publishDate: '1813-01-28',
      isbn: '978-0-14-143951-8',
      cover: '../assets/百年孤独.png',
      price: 40,
      description: '这是一部经典的爱情小说，讲述了英国乡绅家庭的五个女儿，尤其是伊丽莎白·班内特与达西先生之间的爱情故事。小说探讨了社会阶级、婚姻和个人成长等主题，充满了机智的对话和幽默的观察。',
    },
]);

const cart = ref([]);

function addToCart(book) {
  cart.value.push(book);
  localStorage.setItem('cart', JSON.stringify(cart.value)); // 将购物车数据存储到本地
  alert(`${book.title} 已添加到购物车！`);
}
</script>

<style scoped>
/* 基本布局 */
.book-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.cart-link {
  display: block;
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
}

.cart-link:hover {
  text-decoration: underline;
}

/* 列表样式 */
.book-items {
  list-style: none;
  padding: 0;
}

.book-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #ffffff;
  transition: box-shadow 0.2s ease;
}

.book-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.book-title {
  font-size: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.book-title:hover {
  color: #007bff;
  text-decoration: underline;
}

.book-info {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

button {
  margin-top: 10px;
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}
</style>

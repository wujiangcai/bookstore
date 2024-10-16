<template>
  <div class="book-detail">
    <router-link :to="`/books/${book.id}`" class="book-title">
      <h1>{{ book.title }}</h1>
      <img :src="getURL(book.cover)" alt="封面图片" />
    </router-link>
    <p><strong>作者：</strong>{{ book.author }}</p>
    <p><strong>出版日期：</strong>{{ book.publishDate }}</p>
    <p><strong>ISBN：</strong>{{ book.isbn }}</p>
    <p><strong>价格：</strong>¥{{ book.price }}</p>
    <p><strong>简介：</strong>{{ book.description }}</p>
    <router-link to="/books">返回书籍列表</router-link>
    </div>
    
  
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const book = ref({}); // 用于存储书籍信息
// 图片 URL 处理函数
const getURL = (url: string) => new URL(`${url}`, import.meta.url).href;
const fetchBookDetails = async (id) => {
  const bookData = { 
    1: {
      id: 1,
      title: '《1984》',
      author: '乔治·奥威尔 (George Orwell)',
      publishDate: '1949-06-08',
      isbn: '978-0-452-28423-4',
      cover: '../assets/1984.png',
      price: 30,
      description: '《1984》是一本反乌托邦小说，设定在一个高度集权的未来世界。故事围绕主人公温斯顿·史密斯展开，他在一个控制一切的党派统治下努力寻求真相和自由。小说探讨了权力、控制和个人自由之间的关系，提出了对极权主义的深刻批判。',
    },
    2: {
      id: 2,
      title: '《百年孤独》',
      author: '加布里埃尔·加西亚·马尔克斯 (Gabriel García Márquez)',
      publishDate: '1967-05-30',
      isbn: '978-0-06-088328-7',
      cover: '../assets/2.png',
      price: 40,
      description: '这部小说讲述了布恩迪亚家族七代人的传奇故事，背景设定在虚构的小镇马孔多。通过充满魔幻色彩的叙述，展现了人类的孤独、爱情、战争和历史的循环。书中的魔幻现实主义风格，使其成为拉丁美洲文学的重要作品。',
    },
    3: {
      id: 3,
      title: '《傲慢与偏见》',
      author: '简·奥斯汀 (Jane Austen)',
      publishDate: '1813-01-28',
      isbn: '978-0-14-143951-8',
      cover: '../assets/3.png',
      price: 40,
      description: '这是一部经典的爱情小说，讲述了英国乡绅家庭的五个女儿，尤其是伊丽莎白·班内特与达西先生之间的爱情故事。小说探讨了社会阶级、婚姻和个人成长等主题，充满了机智的对话和幽默的观察。',
    },
  };

  return bookData[id] || {}; // 返回对应 ID 的书籍信息
};

onMounted(async () => {
  const bookId = route.params.id; // 获取路由参数 ID
  book.value = await fetchBookDetails(bookId); // 获取书籍详情
});
</script>

<style scoped>
.book-detail {
  max-width: 800px;
  height: 75%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  margin: 0.5rem 0;
}
img{
  width: 120px;
  height: 200px;
}

</style>

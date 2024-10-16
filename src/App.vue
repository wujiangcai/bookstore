<template>
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <Component />
    </transition>
  </router-view> -->
  <router-view/>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

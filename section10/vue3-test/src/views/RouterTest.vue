<template>
  <div>RouterTest</div>
  <button @click="goHome">Homeへ戻る</button>
  <button @click="checkRoutePath">パスをチェック</button>
</template>

<script>
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const goHome = () => {
      router.push("/");
    };
    const checkRoutePath = () => {
      console.log(route.path);
    };
    onBeforeRouteLeave((to, from) => {
      console.log(`to: ${to}`);
      console.log(`from: ${from}`);
    });
    return {
      goHome,
      checkRoutePath,
    };
  },
};
</script>

<style></style>

<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ number }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.auther[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ autherRef[1] }}</p>
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch: <input v-model="search" /></div>
    <div>watchEffect: <input v-model="searchEffect" />{{ searchEffect }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect } from "vue";
export default {
  setup() {
    let name = "大谷";
    const age = 30;
    const nameRef = ref("錦織");
    const book = reactive({
      title: "タイトル",
      auther: ["大谷", "伊藤"],
    });
    const booktoRefs = reactive({
      titleRef: "タイトル2",
      autherRef: ["大谷2", "伊藤2"],
    });
    const btnClick = (e) => {
      console.log("クリック" + book.title);
      console.log(e);
    };
    const item = reactive({ price: 100, number: 1 });
    const totalPrice = computed(() => {
      return item.price * item.number;
    });
    const search = ref("");
    watch(search, (newValue, prevValue) => {
      console.log(`search: ${search.value}`);
      console.log(`newValue: ${newValue}`);
      console.log(`prevValue: ${prevValue}`);
    });
    const searchEffect = ref("");
    watchEffect(() => {
      console.log(`searchEffect: ${searchEffect.value}`);
    });

    console.log("setup");
    console.log(nameRef);
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(booktoRefs),
      btnClick,
      totalPrice,
      search,
      searchEffect,
    };
  },
  data() {
    return {
      number: 1,
      sports: "サッカー",
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style></style>

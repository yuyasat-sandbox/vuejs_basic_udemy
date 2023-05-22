<script setup>
import { ref, defineProps, defineEmits } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const emitTest = defineEmits(["custom-event"]);
const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
</script>

<template>
  <div>ScriptSetup</div>
  <div>{{ count }}</div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <p>{{ props.title }}</p>
  <button @click="emitTest('custom-event', '子からの値')">Emitテスト</button>
</template>

<style></style>

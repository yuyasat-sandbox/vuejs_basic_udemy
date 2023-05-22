<template>
  <div>PropsEmitTest</div>
  <div>{{ setupBooks }}</div>
  <div>{{ dataBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
      {{ book.title }} {{ book.auther }}
    </li>
  </ul>
  <div><button @click="emitTest">emitテスト</button></div>
</template>

<script>
export default {
  props: {
    setupBooks: {
      type: Array,
      required: true,
    },
    dataBooks: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    console.log(props.setupBooks[0].title);
    console.log(props.dataBooks);

    const emitTest = () => {
      context.emit("custom-event", "子の値");
    };
    return {
      emitTest,
    };
  },
};
</script>

<style></style>

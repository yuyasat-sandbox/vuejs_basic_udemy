<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ScriptSetupTest
      title="ここにタイトルが入ります"
      @custom-event="parentMethod"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ScriptSetupTest from "@/components/ScriptSetupTest.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ScriptSetupTest,
  },
  methods: {
    parentMethod(e) {
      console.log("Emit実行", e);
    },
  },
};
</script>

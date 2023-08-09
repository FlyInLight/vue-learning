<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM()">点我输出h1 DOM元素</button>
    <img alt="Vue logo" src="./assets/myLogo.png">
    <MySchoolInfo name="张三" sex="女" :age="18" ref="sch"/>
<!--    <MySchoolInfo name="张三2" sex="女" age="18" ref="sch"/>-->
  </div>
</template>

<script>

import MySchoolInfo from './components/MySchoolInfo.vue'

export default {
  name: 'App',
  data() {
    return {msg: 'hello hexuan'}
  },
  components: {
    MySchoolInfo,
  },
  methods: {
    showDOM() {
      console.log(this.$refs);
      console.log(this.$refs.title);
      console.log(this.$refs.sch.address);
    },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

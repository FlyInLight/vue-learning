<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/myLogo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <MySchoolInfo></MySchoolInfo>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import MySchoolInfo from './components/MySchoolInfo.vue'
import MyStudent from './components/MyStudent.vue'

export default {
  name: 'App',
  components: {
    /* HelloWorld */
    MySchoolInfo,
    MyStudent
  }
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

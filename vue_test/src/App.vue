<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!--  通过父亲给孩子组件传递函数类型的props实现  -->
    <MySchoolInfo :getSchoolName="getSchoolName"/>
    <hr/>
    <!--  通过父组件给子组件绑定一个自定义事件  -->
    <!--    <MyStudentInfo v-on:hexuan="getStudentName"></MyStudentInfo>-->
    <!--    <MyStudentInfo @hexuan="getStudentName"></MyStudentInfo>-->
    <!-- 只调用一次   -->
    <!--    <MyStudentInfo @hexuan.once="getStudentName"></MyStudentInfo>-->

    <!--  使用ref  -->
    <MyStudentInfo ref="student" @demo="m1"></MyStudentInfo>
  </div>
</template>

<script>

import MySchoolInfo from './components/MySchoolInfo.vue'
import MyStudentInfo from "@/components/MyStudentInfo.vue";

export default {
  name: 'App',
  data() {
    return {msg: '你好啊'}
  },
  components: {
    MyStudentInfo,
    MySchoolInfo,
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name)
    },
    // 可变形参
    getStudentName(name, ...params) {
      console.log("App收到了学生名", name, params)
    },
    m1() {
      console.log("demo事件触发了")
    },
  },
  mounted() {
    // 绑定自定义事件
    this.$refs.student.$on('hexuan', this.getStudentName)
    // 更灵活，可以等请求发生完毕再解析
    // setTimeout(() => {
    //   this.$refs.student.$on('hexuan', this.getStudentName)
    // }, 3000)
    // 只调用一次
    // this.$refs.student.$once('hexuan', this.getStudentName)
  }

}
</script>

<style scoped>
#app {
  background-color: gray;
  padding: 5px;
}
</style>

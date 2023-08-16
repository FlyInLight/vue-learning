<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前数字：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">给app学生名</button>
    <button @click="unbind">解绑hexuan事件</button>
    <button @click="death">销毁当前student对象的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: 'MySchoolInfo',
  data() {
    return {
      name: '张三',
      sex: '男',
      number: 0,
    }
  },
  methods: {
    add() {
      console.log("add回调被调用了")
      this.number++;
    },
    sendStudentName() {
      // 触发student实例身上的hexuan事件
      this.$emit('hexuan', this.name, 1, 2, 3)
      this.$emit('demo');
    },
    unbind() {
      // this.$off('hexuan')   // 解绑一个自定义事件
      // this.$off(['hexuan', 'demo']);  // 解绑多个
      this.$off();  // 解绑全部
    },
    death() {
      this.$destroy();  // 销毁了当前组件实例
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>
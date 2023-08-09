<template>
  <!--  组件的交互-->
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<style>
/*css样式*/
.demo {
  background: skyblue;
}
</style>


<script>
//组件交互的代码
//export default school分别暴露
export default {
  name: 'MySchoolInfo',
  data() {
    return {
      name: '沈阳师范大学',
      address: '沈阳'
    }
  },
  methods: {
    showName() {
      alert(this.name);
    }
  }
};
//统一暴露
// export { MySchoolInfo };
// export default MySchoolInfo //默认暴露
</script>

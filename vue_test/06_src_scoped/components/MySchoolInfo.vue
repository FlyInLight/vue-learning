<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MySchoolInfo',
  data() {
    return {
      name: '沈师6666666+',
      address: '地址'
    }
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
}
</style>
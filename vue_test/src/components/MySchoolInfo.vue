<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">给app学校名</button>
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
  props: ['getSchoolName'],
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
    },
  }
};
</script>

<style lang="less" scoped>
.demo {
  background-color: skyblue;
}
</style>
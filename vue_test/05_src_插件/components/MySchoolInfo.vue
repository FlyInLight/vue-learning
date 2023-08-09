<template>
  <div class="demo">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <input type="text" v-fbind:value="name">
    <button @click="test">测试hello</button>
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
  methods: {
    test() {
      this.hello();
    },
  }
};
</script>

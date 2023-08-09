<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个混合
import {mixin} from "@/mixin";

export default {
  name: 'MySchoolInfo',
  data() {
    return {
      name: '沈师',
      address: '地址'
    }
  },
  mixins: [mixin]
};
</script>

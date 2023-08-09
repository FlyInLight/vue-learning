<template>
  <div class="demo">
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 引入一个混合
import {mixin} from "@/mixin";
import {mixin2} from "@/mixin2";

export default {
  name: 'MySchoolInfo',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
  mixins: [mixin, mixin2]
};
</script>

<template>
  <div id="app">
    <MySchoolInfo/>
    <hr/>
    <MyStudentInfo></MyStudentInfo>
  </div>
</template>

<script>

import MySchoolInfo from './components/MySchoolInfo.vue'
import MyStudentInfo from "@/components/MyStudentInfo.vue";

export default {
  name: 'App',

  components: {
    MyStudentInfo,
    MySchoolInfo,
  },
  methods: {},

}
</script>

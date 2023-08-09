<template>
  <div class="demo">
    <button @click="updateAge">修改年龄++</button>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ sex }}</h2>
    <h2>{{ age + 1 }}</h2>
    <h2>{{ myAge + 1 }}</h2>
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
      msg: '我是学生',
      myAge: this.age,  // props的执行优先级更高
    }
  },
  methods: {
    showName() {
      alert(this.name);
    },
    updateAge() {
      // vue不允许修改外部传入数据
      // 如果业务有修改需求，可以这样改
      this.myAge++
      // props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
    },
  },
  // 开发时常用
  // props: ['name', 'age', 'sex'],

  // 接收的同时对类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String
  // },

  // 更详细的属性控制 类型、必填、默认值
  props: {
    name: {
      type: String,   // name类型字符串
      required: true  // 必传项
    },
    age: {
      type: Number,   // age类型数值
      default: 99     // 默认值
    },
    sex: {
      type: String,
      required: true,
    }
  }
};
</script>

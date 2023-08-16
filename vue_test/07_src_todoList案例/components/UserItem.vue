<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <!--      如下代码(v-model)也能实现功能，但是不推荐，违反了修改传入的props原则 （类似面向对象设计原则-- 开放封闭原则）-->
      <!--      <input type="checkbox" :checked="todo.done" v-model="todo.done">-->
      <span>{{ todo.title }}</span>
    </label>
    <button @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    handleCheck(id) {
      // 通知app组件将对应done取反
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        this.deleteTodo(id)
      }
    },
  }
}
</script>

<style scoped>
li {
  width: 300px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
<template>
  <div class="todo-header">
    <input type="text" placeholder="输入任务名称" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "UserHeader",
  data() {
    return {title: ''}
  },
  methods: {
    add(e) {
      if (!this.title.trim()) return;
      const todoObj = {id: nanoid(), title: e.target.value, done: false}
      this.addTodo(todoObj);
      this.title = '';
    },
  },
  props: ['addTodo'],
}
</script>

<style scoped>

</style>
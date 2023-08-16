<template>
  <div id="app">
    <UserHeader :addTodo="addTodo"></UserHeader>
    <UserList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo">
    </UserList>
    <UserFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></UserFooter>
  </div>
</template>

<script>

import UserHeader from "@/components/UserHeader.vue";
import UserFooter from "@/components/UserFooter.vue";
import UserList from "@/components/UserList.vue";
import UserItem from "@/components/UserItem.vue";

export default {
  name: 'App',
  components: {
    UserHeader,
    UserList,
    UserItem,
    UserFooter
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      console.log("app收到数据：" + todoObj)
      this.todos.unshift(todoObj);
    },
    // 勾选/取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    // 全选/取消
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    // 清除所有已经完成todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    },
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    }
  },
  watch: {
    todos: {
      deep: true,   // 深度监视
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      },
    },
  }
}
</script>

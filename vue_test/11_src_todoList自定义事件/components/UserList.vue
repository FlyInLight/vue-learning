<template>
  <ul class="todo-main">
    <UserItem v-for="(todoObj) in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></UserItem>
  </ul>
</template>

<script>
import UserItem from "@/components/UserItem.vue";

export default {
  name: "UserList",
  components: {UserItem},
  props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped>

</style>
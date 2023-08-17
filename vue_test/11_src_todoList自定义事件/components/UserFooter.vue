<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll">-->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span>  / 全部{{ total }}
    </span>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "UserFooter",
  props: ['todos'],
  computed: {
    total() {
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        this.$emit('checkAllTodo', value);
      },
    },
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked)
    // },
    clearAll() {
      this.$emit('clearAllTodo');
    },
  }
}
</script>

<style scoped>

</style>
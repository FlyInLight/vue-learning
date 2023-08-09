export const mixin2 = {
    // 以原对象为主
    data() {
        return {name: 666}
    },
    // 钩子函数都要执行
    mounted() {
        console.log("mixin你好啊")
    }
}
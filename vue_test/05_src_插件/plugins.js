export default {
    install(Vue) {
        console.log('@@@install', Vue);
// 之前学的内容⬇️
        //全局过滤器的配置
        //注意配置一定要new vue实例之前确定
        Vue.filter('mySlice', function (val) {
            return val.slice(0, 4);
        });

        //此时自定义fbind指令使全局指令了，其他vue实例所管理的容器也可以使用
        //全局指令
        Vue.directive('fbind', {
            bind(el, binding) {
                // console.log('bind')
                el.value = binding.value;
            }, //指令被插入页面时
            inserted(el, binding) {
                // console.log('inserted')
                el.focus();
            }, //指令所在模版被重新解析时
            update(el, binding) {
                // console.log('update');
                el.value = binding.value;
            }
        })

        // 定义混入
        Vue.mixin({
            mounted() {
                console.log('你好啊0');
            }
        });

        // 给Vue原型上添加一个方法 vm和vc都能用了
        Vue.prototype.hello = () => alert('你好');
    },
}
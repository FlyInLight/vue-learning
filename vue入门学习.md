

## **引入vue**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>初识Vue</title>
    <!--引入vue-->
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
</body>
</html>
```

引入vue.js，可以看到提示安装开发工具，并已经可以调用构造函数

**安装工具**

![image-20230609150950601](/Users/cat/Library/Application Support/typora-user-images/image-20230609150950601.png)

```js
    // 阻止 vue 在启动时生成生产提示
    Vue.config.productionTip = false
```

## **hello world demo**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>hello world</title>
    <!--引入vue-->
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<!-- 准备好一个容器 -->
<div id="root">
    <!--插值语法{{}}中可以写js表达式-->
    <h1>Hello World! {{name}}, {{Date.now()}}</h1>
</div>
<script type="text/javascript">
    // 创建Vue实例
    new Vue({
        el: '#root',     // el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符（原生getElement一般不用）
        data: {name: '小王'}
    });
</script>
</body>
</html>
```

## 模版语法

### 插值语法

{{}}位于标签体中

### 指令语法

(如：v-bind)类型方式功能强大

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>模版语法</title>
    <!--引入vue-->
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<!-- 准备好一个容器 -->
<div class="root">
    <h1>Hello World! {{name}}, {{Date.now()}}</h1>

    <a v-bind:href="ok.url">{{ok.name}}</a>
    <!--v-bind的简写-->
    <a :href="ok.url">{{ok.name}}</a>
</div>
<script type="text/javascript">
    new Vue({
        el: '.root',
        data: {
            name: '小王',
            ok: {
                name: '百度',
                url: 'http://www.baidu.com'
            }
        }
    });
</script>
</body>
</html>
```

## 数据绑定

### 单向数据绑定

### 双向数据绑定

表单类元素

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>数据绑定</title>
    <!--引入vue-->
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<!-- 准备好一个容器 -->
<div id="root">
    单向数据绑定 <input type="text" v-bind:value="name">
    双向数据绑定 <input type="text" v-model:value="name">
    双向数据绑定简写 <input type="text" v-model="name">

    <h1 v-bind:x="name">你好</h1>
    <!--  v-model的错误应用，只能应用于表单类型元素 -->
    <h1 v-model:x="name">你好</h1>
</div>
<script type="text/javascript">
    new Vue({
        el: '#root',
        data: {
            name: '小王'
        }
    });
</script>
</body>
</html>
```

## el与data的两种写法

### el

```html
<script type="text/javascript">
    const v = new Vue({
        // el: '#root',     // 第一种
        data: {
            name: '小王'
        }
    });
    console.log(v);
    v.$mount('#root')       // 第二种
</script>
```

### data

```html
<script type="text/javascript">
    const v = new Vue({
        el: '#root',
        // 对象方式
        // data: {
        //     name: '小王'
        // }

        //函数方式
        data: function () {
            console.log(this)   // 此处data是vue实例对象
            return {
                name: '小王'
            }
        }
    });
</script>
```

## 理解MVVM

M 模型Model data数据

V 视图View 模版

VM 视图模型ViewModel Vue实例对象

## 数据代理Object.defineproperty

### 属性权限控制

浏览器age属性是浅色，说明不可以被枚举（不能遍历）

```html
<script type="text/javascript">
    let person = {
        name: '张三',
        sex: '男'
    }
    Object.defineProperty(person, 'age', {
        value: 18,
        // enumerable: true,   //控制属性是否可以枚举，默认false
        // writable: true,     //控制属性是否可以被修改，默认false
        // configurable: true  //控制属性是否可以删除，默认false
    })
    console.log(person)
    console.log(Object.keys(person))
</script>
```

### 动态属性值

```html
<script type="text/javascript">
    let number = 18;
    let person = {
        name: '张三',
        sex: '男'
    }
    Object.defineProperty(person, 'age', {
        // 当有人读取person当age属性时，get函数就会被调用，且返回值就是age的值
        // get: function () {
        get() {
            console.log("age被读取了")
            return number;
        },
        set(value) {
            console.log("age被修改了")
            number = value;
        }
    })
    console.log(person)
    console.log(Object.keys(person))
</script>
```

### 理解数据代理

通过obj2操作obj1

```html
<script type="text/javascript">
    let obj1 = {x: 100}
    let obj2 = {y: 100}
    Object.defineProperty(obj2, 'x', {
        get() {
            return obj1.x;
        },
        set(value) {
            obj1.x = value;
        }
    })
</script>
```

### vue数据代理

vm中存在name，age，因为vue把vum对象代理到了vm._data的属性

vm的_data属性是被做了数据劫持

```html
<div id="root">
    <label>{{name}}</label>
    <label>{{age}}</label>
</div>
<script type="text/javascript">
    let data = {
        name: '姓名',
        age: 20
    }
    const vm = new Vue({
        el: '#root',
        data
    });
</script>
```

## 事件处理

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>点击事件</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <button v-on:click="showInfo1">点击我1</button>
    <button @click="showInfo2(88,$event)">点击我2</button>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            name: '姓名',
            age: 20
        },
        methods: {
            showInfo1(event) {
                alert('hello1');
                console.log(event.target.innerText)
                console.log(this === vm)     // 此处的this是vm
            },
            showInfo2(number, event) {
                // alert('hello' + number);
                console.log(number, event);
            }
        }
    });
</script>
</body>
</html>
```

## 事件修饰符

1. prevent 阻止默认行为(常用)
2. stop 阻止事件冒泡(常用)
3. once 事件只触发一次(常用)
4. capture 使用事件的捕获模式
5. self 只有event.target是当前操作元素才触发事件
6. passive 事件的默认行为立即执行，无需等待事件回调执行完毕（移动端偶尔用）

修饰符可以链式调用

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>点击事件</title>
    <script type="text/javascript" src="../js/vue.js"></script>
    <style>
        * {
            margin-top: 20px;
        }

        .demo1 {
            height: 50px;
            background-color: skyblue;
        }

        .box1 {
            padding: 5px;
            background-color: skyblue;
        }

        .box2 {
            padding: 5px;
            background-color: orange;
        }

        .list {
            width: 200px;
            height: 200px;
            background-color: peru;
            overflow: auto;
        }

        li {
            height: 100px;
        }
    </style>
</head>
<body>
<div id="root">
    <h2>hello</h2>
    <!--阻止默认事件-->
    <a href="https://www.baidu.com" @click.prevent="showInfo">阻止默认事件</a>
    <!--阻止事件冒泡-->
    <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">阻止事件冒泡</button>
    </div>
    <!--事件只触发一次-->
    <button @click.once="showInfo">事件只触发一次</button>
    <!--使用事件的捕获模式-->
    <div class="box1" @click.capture="showMsg(1)">
        div1
        <div class="box2" @click="showMsg(2)">
            div2
        </div>
    </div>
    <!--只有event.target是当前操作元素才触发事件-->
    <div class="demo1" @click.self="showInfo">
        <button @click="showInfo">只有event.target是当前操作元素才触发事件</button>
    </div>
    <!--事件的默认行为立即执行，无需等待事件回调执行完毕-->
    <ul class="list" @wheel.passive="demo">
        <!--    <ul class="list" @scroll="demo">-->
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            name: '姓名',
            age: 20
        },
        methods: {
            showInfo(e) {
                // e.preventDefault();     //阻止默认行为（跳转）
                console.log(e.target)
                alert('hello1');
            },
            showMsg(number) {
                console.log(number);
            },
            demo() {
                for (let i = 0; i < 100000; i++) {
                    console.log('#');
                }
                console.log('累坏了');
            },
        }
    });
</script>
</body>
</html>
```

## 键盘事件

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>键盘事件</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>hello</h2>
    <!--
        vue常用按键别名
        enter,delete,esc,space,tab,up,down,left,right

        vue 未提供别名等按键，可以用原始等key值去绑定，单注意要转换未kebab-case（短横线命名）例如：caps-lock

        系统修饰（特殊用法）ctrl,alt,shift,meta 配合keyup，keydown使用

        vue.config.keyCodes.自定义键名 = 键码 可以去定制按键别名
    -->
    <input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo">
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            name: '姓名'
        },
        methods: {
            showInfo(e) {
                console.log(e.target.value)
                console.log(e.keyCode)
            }
        }
    });
</script>
</body>
</html>
```

## 计算属性



要使用的属性不存在，通过已有的属性计算

底层借助了Object.definepeoperty方法提供的getter和setter

get函数初始次调研时执行一次，当依赖的数据发生改变时再次被调用

与method实现相比，内部有缓存机制，效率更高

计算属性最终会出现在vm上，直接取用即可；如果计算属性要被修改，则必须写set响应修改，且set中要引起计算时依赖的数据发生改变

```html
html>
<head>
    <meta charset="UTF-8"/>
    <title>计算属性</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>hello</h2>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <span>{{fullName}}</span>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            firstName: '小',
            lastName: '王'
        },
        methods: {},
        computed: {
            // fullName: {
            //     get() {
            //         return this.firstName + '-' + this.lastName;
            //     }
            // }
            // **简写** 只读不改
            fullName() {
                return this.firstName + '-' + this.lastName;
            },
        },
    });
</script>
</body>
</html>
```

## 监视属性

### 两种基本用法

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>监视属性</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>hello {{info}}</h2>
    <!--计算属性-->
    <button @click="isHot = !isHot;">切换天气</button>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            isHot: true,
            numbers: {
                a: 1,
                b: 2
            }
        },
        methods: {},
        computed: {
            info() {
                return this.isHot ? '热' : '冷';
            },
        },
        watch: {
            isHot: {
                immediate: true,    // 初始化时调用监视
                handler(newValue, oldValue) {
                    console.log(newValue);
                    console.log(oldValue);
                },
            }
        }
    });
    vm.$watch('isHot', {
        handler(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        }
    })
</script>
</body>
</html>
```

### 深度监视

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>深度监视</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>hello {{info}}</h2>
    <!--计算属性-->
    <button @click="isHot = !isHot;">切换天气</button>
    <hr/>
    <h3>a:{{numbers.a}}</h3>
    <button @click="numbers.a++">a++</button>
    <hr/>
    <h3>b:{{numbers.b}}</h3>
    <button @click="numbers.b++">b++</button>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            isHot: true,
            numbers: {
                a: 1,
                b: 1,
                c: {
                    d: {
                        e: 100
                    }
                }
            }
        },
        methods: {},
        computed: {
            info() {
                return this.isHot ? '热' : '冷';
            },
        },
        watch: {
            isHot: {
                handler(newValue, oldValue) {
                    console.log(newValue);
                    console.log(oldValue);
                },
            },
            // 监视多级结构中某个属性的变化
            'numbers.a': {
                handler(newValue, oldValue) {
                    console.log('a变化了');
                }
            },
            // 监视多级结构中所有属性的变化
            numbers: {
                // 可以检测对象内部值的改变
                deep: true,
                handler() {
                    console.log('numbers变化了')
                },
            }
        }
    });
</script>
</body>
</html>
```

### 简写形式

配置项中只有handler

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>监视属性</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>hello {{info}}</h2>
    <!--计算属性-->
    <button @click="isHot = !isHot;">切换天气</button>
</div>
<script type="text/javascript">
    const vm = new Vue({
        el: '#root',
        data: {
            isHot: true,
        },
        methods: {},
        computed: {
            info() {
                return this.isHot ? '热' : '冷';
            },
        },
        watch: {
            // 正常写法
            // isHot: {
            //     handler(newValue, oldValue) {
            //         console.log(newValue);
            //         console.log(oldValue);
            //     },
            // },
            // 简写
            isHot(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
            },
        }
    });
    // 正常写法
    // vm.$watch('isHot', {
    //     handler(newValue, oldValue) {
    //         console.log(newValue);
    //         console.log(oldValue);
    //     }
    // })
    // 简写
    // vm.$watch('isHot', function (newValue, oldValue) {
    //     console.log(newValue);
    //     console.log(oldValue);
    // });
</script>
</body>
</html>
```

## watch和computed对比

区别：

computed能完成的功能 ，watch都能完成

watch能能强，例如可以开启异步任务，computed计算属性不行

原则：

所以被vue管理的函数，最好写成普通函数，这样this的指向才是vm活组件实例对象

所以不被vue管理的函数（定时器的回调函数，ajax的回调函数），最好写成箭头函数，这样this的指向才是vm或组件实例对象

## class与style绑定

https://v2.cn.vuejs.org/v2/guide/class-and-style.html

绑定class字符串适用于样式的类名不确定，需要动态指定

## 条件渲染

v-show="false" 结构在，display:none；适用于变化频率高的场景

v-if="false" 结构不在了

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## 列表渲染


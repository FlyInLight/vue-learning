export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊0');
    }
}

export const mixin1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊1');
    }
}
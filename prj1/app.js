const app=Vue.createApp({
    data() {
        return {
            message: 'Message From vue3'
        }
    },
    methods : {
        onChangeMessage(){
            this.message = 'Update Message From Vue 3'
        }
    }
})

app.component('sample-button',{
    template: '<button @click="onUpdate()">Click Me </button>',
    methods : {
        onUpdate(){
            this.$emit('update');
        }
    }
})




app.mount('#app');
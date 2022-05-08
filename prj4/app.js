const app=Vue.createApp({
    data(){
        return {
            count: 0
        }
    },
    methods: {
        onIncrement: function(){
            this.count++;
        },
        onDecrement: function(){
            this.count--;
        }
    }
});

app.mount('#app');
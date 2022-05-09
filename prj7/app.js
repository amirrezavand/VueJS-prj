const app=Vue.createApp({
    data(){
        return {
            count: 0,
            name: 'amir',
        }
    },
    methods: {
        outputFullName: function(){
            return this.name + ' Web Dev';
        },
        onIncrement: function(){
            this.count++;
        },
        onDecrement: function(){
            this.count--;
        },
        submitForm: function(){
            alert('this is test');
        }
    }
});

app.mount('#app');

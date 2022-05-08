const app=Vue.createApp({
    data(){
        return {
            count: 0,
            name: '',
        }
    },
    methods: {
        onIncrement: function(){
            this.count++;
        },
        onDecrement: function(){
            this.count--;
        },
        setName: function(event){
            this.name=event.target.value;
        },
        // setName: function(event,lastName){
            // this.name=event.target.value+' '+lastName;
        // },
    }
});

app.mount('#app');
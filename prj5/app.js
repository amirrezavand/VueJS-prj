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

// https://www.youtube.com/watch?v=kolVTQhm71o&list=PL_euSNU_eLbedoBv-RllKj_f2Yh--91nZ&index=7
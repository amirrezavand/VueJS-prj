const app=Vue.createApp({
    data(){
        return {
            count: 0,
            name: '',
            lastname: '',
            fullname: '',
        }
    },
    watch: {
        name(){
            this.fullname = this.name + ' ' + this.lastname;
        },
        lastname(){
            this.fullname = this.name + ' ' + this.lastname;
        },
        count(value){
            if(value>5){
                this.count = 0;
            }
        }
    },
    computed: {
        // fullname(){
        //     return this.name+' Web Dev';
        // },
        // fullname(){
        //     return this.name+' '+this.lastname;
        // }
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

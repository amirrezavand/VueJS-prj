const app=Vue.createApp({
    data(){
        return {
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false
        }
    },
    methods: {
        onBoxSelected(box) {
            this.boxASelected=false;
            this.boxBSelected=false;
            this.boxCSelected=false;
            if(box==='A')
                this.boxASelected=true;
            else if(box==='B')
                this.boxBSelected=true;
            else if(box==='C')
                this.boxCSelected=true;    
        
        }
    }
});

app.mount('#app');

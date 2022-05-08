const app=Vue.createApp({
    data(){
        return {
            title: 'Create a Post Data',
            link: 'https://vuejs.org',
            textDetail: '<h2>Learn Vue JS</h2>',
            anotherTextDetail: 'Learn Vue Js -> Another Text', 
        }
    },
    methods: {
        getText: function(){
            return this.textDetail;
        },
        getAnotherText: function(){
            return this.anotherTextDetail;
        },
    }
});


app.mount('#app');

// https://www.youtube.com/watch?v=nnyNlj91YjE&list=PL_euSNU_eLbedoBv-RllKj_f2Yh--91nZ&index=3
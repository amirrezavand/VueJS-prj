const commanData ={
  commonMessage : 'This is the common message'
};




const app1 = Vue.createApp({
  data(){
    return {
      message: 'Hello World',
      data: commanData,
    };
  }
});
app1.mount("#app1");


const app2 = Vue.createApp({
  data(){
    return {
      anotherMessage: 'Another Hello World',
      data: commanData,
    };
  },
  methods: {
    changeMessage(){
      this.data.commonMessage = 'change the message'
    }
  }
});
app2.mount("#app2");

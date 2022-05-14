const app = Vue.createApp({
  data(){
    return {
      count: 0,
    };
  },
  beforeCreate(){
    console.log('before create');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('before mount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('before update');
  },
  updated(){
    console.log('updated');
  },
  beforeUnmount(){
    console.log('before unmount');
  },
  unmuonted(){
    console.log('unmounted');
  },
  methods:{

  }
});
app.mount("#app");


setTimeout(()=>{
    app.unmount();
},3000)

// https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
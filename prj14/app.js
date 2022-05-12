const app = Vue.createApp({
  data() {
    return {
      hobbies: [],
      enterHobbyValue:'',
    };
  },
  methods: {
    onHobbySubmit(){
      this.hobbies.push(this.enterHobbyValue);
    }
  }
});

app.mount("#app");

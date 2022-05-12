const app = Vue.createApp({
  data() {
    return {
      hobbies: [],
      enterHobbyValue:'',
      userDetails: {
        firstname: 'amir',
        lastname: 'rezavand',
        age : 27,
      }
    };
  },
  methods: {
    onHobbySubmit(){
      this.hobbies.push(this.enterHobbyValue);
      this.enterHobbyValue= '';
    },
    removeHobby(index) {
      this.hobbies.splice(index,1);
    }
  }
});

app.mount("#app");

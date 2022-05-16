const app = Vue.createApp({
  data(){
    return {
      hobbies : ['Reading','Writing','Playing']
    };
  }
});

app.component('hobbies-component',{
  template: `<ul class="list-group">
              <li class="list-group-item" v-for="hobby in hobbies">
                {{hobby}}
              </li>
            </ul>`,
  data(){
    return {
      hobbies : ['Reading','Writing','Playing']
    };
  }
})

app.mount("#app");

// const hobbiesComponent = {
//   template: `<ul class="list-group">
//               <li class="list-group-item" v-for="hobby in hobbies">
//                 {{hobby}}
//               </li>
//             </ul>`,
//   data(){
//     return {
//       hobbies : ['Reading','Writing','Playing']
//     };
//   }
// }

// const app = Vue.createApp({
//   data(){
//     return {}
//   },
//   components : {
//     hobbiesComponent,
//   }
// })





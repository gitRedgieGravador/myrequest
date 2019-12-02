<template>
  <div>
    <v-card :height="ihieght" color="">
      <div class="v-align">
        <h1 >fbdsfdsfj {{ihiegth}}</h1>
        <v-btn @click="sampleEv">sample</v-btn>
         <v-btn @click="goto('/editPassword')">edit password</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
//import Sidebar from "../components/Sidebar";
/* eslint-disable */
import axios from 'axios'
import io from "socket.io-client";
import EditPasswordVue from './EditPassword.vue';
var socket = io.connect("http://localhost:3232");
export default {
  name: "educator",
  data() {
    return {
      name: "",
      ihieght: 0,
      username: "redgie123"
    };
  },
  mounted(){
      this.ihieght = window.innerHeight - (window.innerHeight/10)
  },

  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
    redirect(fullpath) {
      this.$router.push({ path: fullpath });
    },
    sampleEv(){
      axios.post('http://localhost:3232/socket', {username: this.username}).then(resp=>{
        console.log(resp)
      })
    },
   goto(link){
     this.$router.push({path:EditPassword})

   }
    // sampleEv() {
    //   socket.emit("sample", {username: this.username});
    // }
  }
};
</script>
<style scoped>
.wt95 {
  width: 95%;
  margin-right: 5%;
}
.v-align {
  vertical-align: center;
}
</style>
<template>
  <div>
    <center>
      <h1>Protected</h1>
      <input type="text" v-model="username">
      <v-btn @click="send">sample</v-btn>
    </center>
  </div>
</template>
<script>
/* eslint-disable */
import io from "socket.io-client";
var socket = io.connect("http://localhost:3232");
import axios from 'axios'
export default {
  name: "protected",
  data() {
    return {
      sample: "sample",
      username:"redgie"
    };
  },
  created(){
      this.onSample()
  },
  methods: {
    // send() {
    //   socket.emit("sample", this.username)
    // },
    send(){
      axios.post('http://localhost:3232/socket', {username: this.username}).then(resp=>{
        console.log(resp)
      })
    },
    // onSample(){
    //     socket.on('sample', function(data){
    //         alert(data)
    //     })
    // }
  }
};
</script>

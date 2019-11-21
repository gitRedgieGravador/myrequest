<template>
  <div>
    <center>
      <h1>Sample for socket</h1>
      <h1> hi {{this.sample}}</h1>
    </center>
  </div>
</template>
<script>
/* eslint-disable */
import io from "socket.io-client";
var socket = io.connect("http://localhost:3232");
export default {
  name: "protected",
  data() {
    return {
      sample: "yes"
    };
  },
  created(){
      this.onSample()
  },
  methods: {
    onSample(){
        var event;
        socket.on('sample', function(data){
            alert(data)
            event = data
        })
        console.log("out event = ", event)
    }
  }
};
</script>

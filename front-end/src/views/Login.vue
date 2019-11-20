  
<template>
  <div>
    <div class="logindiv"></div>
    <center>
      <div id="login-card">
        <v-card class="transparent" elevation="10" width="500" height="300">
          <div class="custom">
            <v-text-field append-icon="mdi-account" outlined label="Username" v-model="username" color="black"/>
            <v-text-field  @click:append="showpass = !showpass" :type="showpass ? 'text' : 'password'" :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'" outlined label="Password" v-model="password" color="black"/>
          </div>
          <div class="transparent pl-6 pr-6">
            <v-btn class="border"  text block height="70" color="primary" v-on:click="login"><h1 class="font">LOGIN</h1></v-btn>
          </div>    
        </v-card>
      </div>
    </center>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      showpass: false
    };
  },
  methods: {
    adduser() {
      localStorage.setItem("username", this.username);
    },
    getuser() {
      var name = localStorage.getItem("username");
      alert(name);
    }
  },
  computed: {
    user() {
      return this.$store.state.username;
    }
  }
};
</script>
<style scoped>
.custom {
  margin-top: 30px;
  margin-left: 5%;
  margin-right: 5%;
}
.logindiv {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  height: 100%;
  background: url("../assets/sunset.png");
  background-size: cover;
  opacity: 0.7;
}
#login-card {
  position: relative;
  left: -50%;
  transform: translate(50%, 50%);
}
.transparent {
  background-color: white !important;
  opacity: 0.9;
  border-color: transparent !important;
  border: solid 1px black;
}
.font {
    font-family:fantasy;
    font-size: 50px;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    letter-spacing: 30px;
}
.border {
    border: solid 1px black;
}
</style>
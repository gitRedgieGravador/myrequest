  
<template>
  <div>
    <div class="logindiv"></div>
    <center>
      <div id="login-card">
        <v-card class="transparent" elevation="10" width="500" height="420">
          <div class="pad-top">
            <img src="@/assets/pnlogo.png" id="logo">
            <p>Passerelles Numeriques</p>
          </div>
          <form @submit.prevent="login">
            <div class="custom">
              <v-text-field
                append-icon="mdi-account"
                outlined
                label="Username"
                v-model="username"
                color="black"
              />
              <v-text-field
                @click:append="showpass = !showpass"
                :type="showpass ? 'text' : 'password'"
                :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                outlined
                label="Password"
                v-model="password"
                color="black"
              />
            </div>
            <div class="transparent pl-6 pr-6">
              <v-btn type="submit" class="border" text block height="70" color="primary">
                <h1 class="font">LOGIN</h1>
              </v-btn>
            </div>
          </form>
        </v-card>
      </div>
    </center>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
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
    login() {
      let body = { username: this.username, password: this.password };
      this.$store
        .dispatch("login", body)
        .then((resp) => {
          if (resp.data.status){
            this.$router.push("/educator")
          }else{
            alert(resp.data.sms)
          }
        })
        .catch(err => console.log(err));
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
  background: url("../assets/minimal1.png");
  background-size: cover;
  opacity: 0.8;
}
#login-card {
  position: relative;
  left: -50%;
  transform: translate(50%, 50%);
}
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
.font {
  font-family: fantasy;
  font-size: 50px;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  letter-spacing: 30px;
}
.border {
  border: solid 1px black;
}
#logo {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: solid 1px black;
}
.pad-top {
  position: relative;
  padding-top: 5%;
}
</style>
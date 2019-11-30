<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      
        <h1>PN Request Management System</h1>
      
      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">
        <v-btn text @click="logout">
          <span class="mr-2">log out</span>
          <b>
            <v-icon>mdi-logout</v-icon>
          </b>
        </v-btn>
      </span>
      <span v-else>
      <v-btn text @click="redirect('/login')">
        <b>
          <v-icon>mdi-login</v-icon>
        </b>
        <span class="mr-2">Sign In</span>
      </v-btn>
      </span>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",

  components: {},

  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    redirect(fullpath){
      this.$router.push({path: fullpath})
    }
  },
  created(){
    this.$router.push({name:'allrequest'})
  }
};
</script>

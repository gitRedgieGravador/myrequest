<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn text>
        <b>
          <v-icon>mdi-login</v-icon>
        </b>
        <span class="mr-2">Sign In</span>
      </v-btn>
      <v-btn text>
        <b>
          <v-icon>mdi-account-plus</v-icon>
        </b>
        <span class="mr-2">Sign Up</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">log out</span>
        <b>
          <v-icon>mdi-logout</v-icon>
        </b>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>

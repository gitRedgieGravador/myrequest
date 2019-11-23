<template>
  <v-app>
      <v-app-bar app color="primary" dark>
        <div v-show="resized">
          <v-app-bar-nav-icon v-if="isLoggedIn" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </div>

        <h1 v-show="!resized">PN Request Management System</h1>
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
          <v-btn text @click="redirect('/')">
            <b>
              <v-icon>mdi-login</v-icon>
            </b>
            <span class="mr-2">Sign In</span>
          </v-btn>
          
        </span>
      </v-app-bar>
    <v-content>
      <div v-show="isLoggedIn">
        <div v-if="resized">
          <v-navigation-drawer v-model="drawer" absolute left temporary>
            <Resizedbar />
          </v-navigation-drawer>
          <router-view />
        </div>
        <div v-else>
          <v-row>
            <v-col>
              <Sidebar />
            </v-col>
            <v-col cols="10" class="text-center">
              <div class="wt95">
                <router-view />
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div v-show="!isLoggedIn">
        <router-view />
      </div>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import Sidebar from "./components/Sidebar";
import Resizedbar from "./components/Resizedbar";
export default {
  name: "App",
  components: { Sidebar, Resizedbar },
  data() {
    return {
      drawer: false,
      resized: false
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
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
    handleResize() {
      if (window.innerWidth < 1200) {
        this.resized = true;
      } else {
        this.resized = false;
      }
    }
  }
};
</script>
<style scoped>
.wt95 {
    width: 95%;
    margin-right: 5%;
}
</style>

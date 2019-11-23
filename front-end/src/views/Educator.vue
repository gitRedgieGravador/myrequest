<template>
  <div>
    <v-card :height="ihieght" color="">
      <div class="v-align">
        <h1 >fbdsfdsfj {{ihiegth}}</h1>
      </div>
    </v-card>
  </div>
</template>
<script>
//import Sidebar from "../components/Sidebar";
export default {
  name: "educator",
  data() {
    return {
      name: "",
      ihieght: 0
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
    }
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
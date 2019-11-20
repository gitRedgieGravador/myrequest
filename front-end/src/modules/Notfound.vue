<template>
  <div>
    <div v-if="notfound">
      <div class="overlay">
        <center>
          <p class="st404">404</p>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "redirect",

  data() {
    return {
      notfound: true,
    };
  },
};
</script>
<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  height: 100%;
  /* background:#186fa1; */
  background-image: linear-gradient(
    to bottom right,
    rgb(24, 111, 161, 0.6),
    rgb(24, 111, 161, 0.8),
    #186fa1
  );
}
.st404 {
    position: relative;
    margin-top: -7%;
    font-size: 200px;
    font-family: Georgia, serif;
    font-weight: bolder;
    color: white;
    text-decoration: underline;
}
</style>
<template>
  <v-expansion-panels focusable>
    <RequestCard
      v-for="(request, index) in requests"
      :request="request"
      :key="index"
      @remove="removeItem(request)"
    />
  </v-expansion-panels>
</template>
<script>
import RequestCard from "../components/RequestContainer.vue";
import { getPending } from "../actions/requestAxios.js";
import io from "socket.io-client";
var socket = io.connect("http://localhost:3232");
export default {
  components: {
    RequestCard
  },
  data() {
    return {
      sample: "sample",
      username: "redgie",
      requests: []
    };
  },
  created() {
    this.onSample();
  },
  methods: {
    send() {
      socket.emit("sample", this.username);
    },
    onSample() {
      socket.on("sample", function(data) {
        alert(data);
      });
    },
    removeItem(request) {
        this.requests.splice(this.requests.indexOf(request), 1)
      }
  },
  mounted() {
    getPending()
      .then(data => (this.requests = data.data))
      .catch(err => alert(err));
  }
};
</script>

<template>
  <v-card class="ma-5">
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="request in requests" v-bind:key="request.firstname">
        <RequestCard
          v-bind:batch="request.batch"
          v-bind:firstname="request.firstname"
          v-bind:lastname="request.lastname"
          v-bind:category="request.category"
          v-bind:email="request.email"
          v-bind:when="request.when"
          v-bind:what="request.what"
          v-bind:why="request.why"
          v-bind:status="request.status"
          v-bind:statusDate="request.statusDate"
          v-bind:dateOfSubmit="request.dateOfSubmit"
        />
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import RequestCard from "../components/RequestContainer.vue";
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
      requests: [
        {
          batch: 2021,
          category: "Academic",
          firstname: "Mary Grace",
          lastname: "Tibs",
          email: "dfdfdfdf",
          what: "dfdfdf",
          when: "December 10, 2019",
          why: "dsdsdsds",
          status: "unread",
          statusDate: null,
          dateOfSubmit: "December 1, 2019"
        },
        {
          batch: 2021,
          category: "Academic",
          firstname: "Mary",
          lastname: "Tibs",
          email: "dfdfdfdf",
          what: "dfdfdf",
          when: "December 10, 2019",
          why: "dsdsdsds",
          status: "unread",
          statusDate: null,
          dateOfSubmit: "December 1, 2019"
        }
      ]
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
    }
  }
};
</script>

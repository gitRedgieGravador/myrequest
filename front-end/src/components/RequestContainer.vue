<template>
  <v-card class="ma-5">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
            <h3>{{category}}</h3>
            <v-spacer></v-spacer>
          <h4>{{when}}</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="light-blue lighten-3" class="pa-2">
          <v-list-item two-line>
            <v-list-item-content>
              <v-row align="center">
                <v-col cols="4">
                  <v-list-item-title>{{firstname}} {{lastname}}</v-list-item-title>
                  <v-list-item-subtitle>Sent by</v-list-item-subtitle>
                </v-col>
                <v-col cols="2">
                  <v-list-item-title>{{batch}}</v-list-item-title>
                  <v-list-item-subtitle>Batch</v-list-item-subtitle>
                </v-col>
                <v-col cols="6">
                  <v-list-item-title>{{email}}</v-list-item-title>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider color="orange"></v-divider>
          <v-card-title color="orange">Request</v-card-title>
          <v-list-item two-line>
            <v-list-item-content>
              <v-card class="mx-auto pa-5" color="light-blue lighten-4">
              <v-row>
                <v-col cols="2"><b>What</b></v-col>
                <v-col cols="10">
                  <p>{{what}}</p>
                </v-col>
              </v-row>
              <v-row >
                <v-col cols="2"><b>Why</b></v-col>
                <v-col cols="10">
                  <p>{{why}}</p>
                </v-col>
              </v-row>
              </v-card>
            </v-list-item-content>
          </v-list-item>
          <v-footer color="white" class="mt-3">
            <p class="font-weight-light	">Received: {{dateOfSubmit}}</p>
            <v-spacer></v-spacer>
            <v-btn small dark class="ma-2" color="blue">Pending</v-btn>
            <v-btn small dark class="ma-2" color="green accent-3">Approved</v-btn>
            <v-btn small dark class="ma-2" color="red">Reject</v-btn>
          </v-footer>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "requests",
  props: {
    batch: Number,
    category: String,
    firstname: String,
    lastname: String,
    email: String,
    what: String,
    when: String,
    why: String,
    status: String,
    statusDate: String,
    dateOfSubmit: String
  }
};
</script>

<style scoped>
.expansion-panel__container {
  background-color: rgba(0, 0, 0, 5) !important;
}
</style>
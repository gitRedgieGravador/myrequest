<template>
  <!-- <v-card class="ma-5"> -->
    <!-- <v-expansion-panels focusable> -->
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h3 class="text-uppercase">{{category}}</h3>
          <v-spacer></v-spacer>
          <h4>Needed on: {{when}}</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="light-blue lighten-3" class="pa-2">
          <v-list-item two-line>
            <v-list-item-content>
              <v-row align="center">
                <v-col cols="4">
                  <v-list-item-title>{{firstname+" "+lastname}}</v-list-item-title>
                  <v-list-item-subtitle>Send by</v-list-item-subtitle>
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
          <h3 class="mt-2">Request</h3>
          <v-list-item two-line>
            <v-list-item-content>
              <v-card color="light-blue lighten-4" class="mx-auto pa-2">
                <v-row>
                  <v-col cols="1">
                    <b>What</b>
                  </v-col>
                  <v-col cols="11">
                    <p>{{what}}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <b>Why</b>
                  </v-col>
                  <v-col cols="11">
                    <p>{{why}}</p>
                  </v-col>
                </v-row>
                <!-- <p><b class="mr-10">When</b>December 02, 2019</p> -->
              </v-card>
            </v-list-item-content>
          </v-list-item>
          <v-footer color="white" class="mt-3">
            <p class="font-italic body-2">Received: {{dateOfSubmit}}</p>
            <v-spacer></v-spacer>
            <v-btn small dark class="ma-2" color="blue">Pending</v-btn>
            <v-btn small dark class="ma-2" color="green accent-3">Approved</v-btn>
            <v-btn small dark class="ma-2" color="red">Reject</v-btn>
          </v-footer>
        </v-expansion-panel-content>
      </v-expansion-panel>
    <!-- </v-expansion-panels> -->
  <!-- </v-card> -->
</template>

<script>
/* eslint-disable */
export default {
  name: "RequestCard",
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
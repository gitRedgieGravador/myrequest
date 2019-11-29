<template>
  <v-card class="ma-5">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
            <h3>ACADEMIC</h3>
            <v-spacer></v-spacer>
            <h4>December 02, 2019</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="light-blue lighten-3" class="pa-2">
          <v-list-item two-line>
            <v-list-item-content>
              <v-row align="center">
                <v-col cols="4">
                  <v-list-item-title>Mary Grace Tiburillo</v-list-item-title>
                  <v-list-item-subtitle>Send by</v-list-item-subtitle>
                </v-col>
                <v-col cols="2">
                  <v-list-item-title>2021</v-list-item-title>
                  <v-list-item-subtitle>Batch</v-list-item-subtitle>
                </v-col>
                <v-col cols="6">
                  <v-list-item-title>marygrace.tiburillo@student.passerellesnumeriques.org</v-list-item-title>
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <h3>Request</h3>
          <v-list-item two-line>
            <v-list-item-content>
              <v-card class="mx-auto pa-2">
                <p><b class="mr-10">What</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><b class="mr-10">Why</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <!-- <p><b class="mr-10">When</b>December 02, 2019</p> -->
              </v-card>
            </v-list-item-content>
          </v-list-item>
          <v-footer color="white" class="mt-3">
            
            <v-spacer></v-spacer>
            <v-btn x-small dark class="ma-2" color="blue">Pending</v-btn>
            <v-btn x-small dark class="ma-2" color="green accent-3">Approved</v-btn>
            <v-btn x-small dark class="ma-2" color="red">Reject</v-btn>
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
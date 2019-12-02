<template>
<v-expansion-panel>
    <v-expansion-panel-header>
        <h3 class="text-uppercase">{{request.category}}</h3>
        <v-spacer></v-spacer>
        <h4>Needed on: {{request.when}}</h4>
    </v-expansion-panel-header>
    <v-expansion-panel-content color="light-blue lighten-3" class="pa-2">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="mb-5">
                    <v-avatar class="mr-3">
                        <img src="@/assets/pnlogo.png" id="logo">
                    </v-avatar>
                    <span class="headline font-weight-bold">Request From Student</span>
                </v-list-item-title>
                <v-row align="center">
                    <v-col cols="4">
                        <v-list-item-title>{{request.firstname+" "+request.lastname}}</v-list-item-title>
                        <v-list-item-subtitle>Sent by</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="2">
                        <v-list-item-title>{{request.batch}}</v-list-item-title>
                        <v-list-item-subtitle>Batch</v-list-item-subtitle>
                    </v-col>
                    <v-col cols="6">
                        <v-list-item-title>{{request.email}}</v-list-item-title>
                        <v-list-item-subtitle>Email</v-list-item-subtitle>
                    </v-col>
                </v-row>
            </v-list-item-content>
        </v-list-item>
        <v-divider color="orange"></v-divider>
        <h3 class="mt-2">About the Request</h3>
        <v-list-item two-line>
            <v-list-item-content>
                <v-card color="light-blue lighten-4" class="mx-auto pa-2">
                    <v-row>
                        <v-col cols="2" align="center">
                            <b>What</b>
                        </v-col>
                        <v-col cols="10">
                            <p>{{request.what}}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2" align="center">
                            <b>Why</b>
                        </v-col>
                        <v-col cols="10">
                            <p>{{request.why}}</p>
                        </v-col>
                    </v-row>
                    <!-- <p><b class="mr-10">When</b>December 02, 2019</p> -->
                </v-card>
            </v-list-item-content>
        </v-list-item>
        <v-footer color="white" class="mt-3">
            <p class="font-italic body-2">Received: {{request.dateOfSubmit}}</p>
            <v-spacer></v-spacer>
            <v-btn small dark class="ma-2" color="blue" @click="updateStatus('pending')">Pending</v-btn>
            <v-btn small dark class="ma-2" color="green accent-3" @click="updateStatus('approved')">Approve</v-btn>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn small dark class="ma-2" v-on="on" color="red">Reject</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <v-avatar class="mr-3">
                            <img src="@/assets/pnlogo.png" id="logo">
                        </v-avatar>
                        <span class="headline">Reason</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-textarea v-model="reason" outlined label="Reason of rejection"></v-textarea>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" @click="dialog = false" text>Cancel</v-btn>
                        <v-btn color="blue darken-1" @click="updateStatus('rejected'), addReason()" text>Continue</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-footer>
    </v-expansion-panel-content>
</v-expansion-panel>
</template>

<script>
import {
    updateRequest,
    updateWhy
} from "../actions/requestAxios.js";
export default {
    name: "RequestCard",
    props: ["request"],
    data: () => ({
        dialog: false,
        reason: ""
    }),
    methods: {
        updateStatus(status) {
            updateRequest(status, this.request._id)
                .then(data => {
                    this.$emit("updateRequest", data.data);
                })
                .catch(err => alert(err.message));
            setTimeout(() => this.$emit("remove", this.request), 2000);
        },
        addReason() {
            updateWhy(this.reason, this.request._id)
                .then(data => {
                    this.$emit("updateWhy", data.data);
                    this.reason = "";
                    this.dialog = false;
                })
                .catch(err => alert(err.message));
        }
    }
};
</script>

<style scoped>
.expansion-panel__container {
    background-color: rgba(0, 0, 0, 5) !important;
}
</style>

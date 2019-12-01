<template>
  <div id="inspire">
    <div>
      <v-spacer>
        <br>
        <br>
      </v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="blue darken-1" center right absolute dark class="mb-2" v-on="on">
            <v-icon>mdi-plus</v-icon>New Request
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="black--text">
            <v-list-item-avatar tile right size="62"></v-list-item-avatar>
            <span class="headline">New Request</span>
          </v-card-title>
          <v-divider color="light-blue lighten-2"></v-divider>
          <v-card-text>
            <v-container>
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Fill in the following information</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-select
                    v-model="selectBatch"
                    :items="batch"
                    :rules="[v => !!v || 'Batch is required']"
                    label="Batch"
                    required
                  ></v-select>
                  <v-text-field
                    v-model="name"
                    prepend-icon="mdi-account"
                    :counter="15"
                    :rules="nameRules"
                    label="Firstname"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="lastname"
                    prepend-icon="mdi-account"
                    :counter="15"
                    :rules="lastnameRules"
                    label="Lastname"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    prepend-icon="mdi-email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <br>
                  <br>
                  <v-select
                    v-model="selectCategory"
                    :items="category"
                    :rules="[v => !!v || 'Category is required']"
                    label="Request Category"
                    required
                  ></v-select>
                  <br>
                  <v-text-field
                    v-model="title"
                    :rules="[v => !!v || 'Title is required']"
                    prepend-icon="mdi-tag"
                    label="Request Title"
                    required
                  ></v-text-field>
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Date Needed"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable :min="currentDate">
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                  <br>
                  <v-textarea
                    outlined
                    v-model="description"
                    name="input-7-4"
                    label="Request Description"
                    value
                    :rules="[v => !!v || 'Description is required']"
                  ></v-textarea>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="blue darken-1" @click="close = false">Cancel</v-btn>
                <v-btn color="orange" @click="sendRequest">Submit</v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="formAction()">Save</v-btn>
          </v-card-actions>-->
        </v-card>
      </v-dialog>
      <v-card class="mx-auto" max-width="800">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="(item,i) in list" :key="i">
            <v-expansion-panel-header>{{item.what}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{item.why}}
              <br>
              <br>Status:
              <div class="red lighten-1 text-center">
                <span class="white--text">{{item.status}}</span>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allRequest",
  data() {
    return {
      list: [],
      modal: false,
      close: false,
      dialog: false,
      description: "",
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Firstname is required",
        v => (v && v.length <= 15) || "Name must be less than 15 characters"
      ],
      lastname: "",
      lastnameRules: [
        v => !!v || "Lastname is required",
        v => (v && v.length <= 15) || "Name must be less than 15 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      selectBatch: null,
      batch: ["2020", "2021", "2022"],
      selectCategory: null,
      date: null,
      currentDate: new Date().toISOString().substr(0, 10),
      category: [
        "Personal",
        "Whole Batch",
        "Center Supplies",
        "School Supplies"
      ],
      title: ""
    };
  },
  mounted() {
    // requrst
    this.$http
      .get("http://localhost:3232/getAllRequest")
      .then(res => {
        this.list = res.data.data;
      })
      .catch(err => console.log(err));
  },
  methods: {
    sendRequest(e) {
      let body = {
        batch: this.selectBatch,
        category: this.selectCategory,
        firstname: this.name,
        lastname: this.lastname,
        email: this.email,
        what: this.title,
        when: this.date,
        why: this.description,
        status: "unread",
        statusDate: new Date(),
        dateOfSubmit: new Date()
      };
      let url = "http://localhost:3232/addRequest";
      axios
        .post(url, body)
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
      this.selectBatch = "";
      this.selectCategory = "";
      this.name = "";
      this.lastname = "";
      this.email = "";
      this.title = "";
      this.date = "";
      this.description = "";
      e.preventDefault();
      //console.log(body);
    }
  }
};
</script>

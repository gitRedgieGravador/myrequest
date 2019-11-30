<template>
  <div>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Fill in the following information</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <!-- <v-text-field label="Login" name="login" prepend-icon="mdi-person" type="text"/>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      type="password"
                    />-->
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
                    <br />
                    <br />
                    <v-select
                      v-model="selectCategory"
                      :items="category"
                      :rules="[v => !!v || 'Category is required']"
                      label="Request Category"
                      required
                    ></v-select>
                    <br />
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
                          :disabled="disable"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        scrollable
                        :min="currentDate"
                        @change="selectDate"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                    <br />
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
                  <v-spacer />
                  <v-btn color="orange" @click="sendRequest">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "form",
  data() {
    return {
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
  methods: {
    selectDate() {
      const list = this.dataHours[0].hoursRequested; //list of date being booked by clients
      const index = this.services.map(e => e.name).indexOf(this.selectService);
      const time = this.services[index].time;
      const date = `${this.date}T00:00:00.000Z`;
      // console.log(list);

      if (!list.some(item => item.date == date)) {
        this.dataHours[0].hoursRequested.push({ date: date, minutes: time });
      } else {
        const indexDate = list.map(e => e.date).indexOf(date);
        const totalTime = list[indexDate].minutes + time;
        if (totalTime > this.dataHours[0].totalHours) {
          this.alertDisplay();
          this.date = this.currentDate;
        } else {
          list[indexDate].minutes += time;
        }
      }
      // console.log(list);
    },
    /* eslint-disable */
    sendRequest() {
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
      let url = 'http://localhost:3232/addRequest'
      axios.post(url, body).then(resp=>{
        console.log(resp)
      }).catch(err=>{
        console.log(err)
      })
      this.$v.$reset()
        this.selectBatch = null
        this.selectCategory = null
        this.name = ''
        this.lastname = ''
        this.email = ''
        this.title = ''
        this.date = ''
        this.description = ''
      //console.log(body);
    }
  }
};
</script>


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
                <v-card-text >
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
                      :counter="25"
                      :rules="nameRules"
                      label="Full Name"
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
                    <br />
                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Request Description"
                      value
                      :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="orange">Submit</v-btn>
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
export default {
  name: "form",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 25) || "Name must be less than 25 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      selectBatch: null,
      batch: ["2020", "2021", "2022"],
      selectCategory: null,
      category: [
        "Personal",
        "Whole Batch",
        "Center Supplies",
        "School Supplies"
      ],
      title: ""
    };
  }
};
</script>


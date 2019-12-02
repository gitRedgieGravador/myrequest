<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Edit Password</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  name="oldpassword"
                  :value="myoldPass"
                  label="Enter Old password"
                  :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (value = !value)"
                  :type="value ? 'password' : 'text'"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  name="newpassword"
                  :value="mynewPass"
                  label="Enter New password"
                  :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (show = !show)"
                  :type="show ? 'password' : 'text'"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  name="confirmpassword"
                  :value="confirmPass"
                  label="Confirm New password"
                  :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (show1 = !show1)"
                  :type="show1 ? 'password' : 'text'"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">Close</v-btn>
          <v-btn color="primary" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      value: String,
      show1:true,
      show:true,

      dialog: false
    };
  }
};
</script>
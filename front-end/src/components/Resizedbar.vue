<template>
  <div>
      <v-card>
        <center>
          <div class="pt-5">
            <img src="@/assets/pnlogo.png" id="profile">
          </div>
          <v-list>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="title">Redgie Gravador</v-list-item-title>
                <v-list-item-subtitle>Admin</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </center>
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item link class="ml-6" >
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link class="ml-6" >
            <v-list-item-icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Add Client</v-list-item-title>
          </v-list-item>
          <v-list-item link class="ml-6" >
            <v-list-item-icon>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Offer Loan</v-list-item-title>
          </v-list-item>
          <v-list-item link class="ml-6">
            <v-list-item-icon>
              <v-icon>mdi-currency-usd</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Payments</v-list-item-title>
          </v-list-item>
          <v-expansion-panels class="ma-0 pa-0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Reports</v-list-item-title>
                </v-list-item>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item link class="ml-6">
                    <v-list-item-icon>
                      <v-icon>mdi-chart-areaspline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Portfolio Report</v-list-item-title>
                  </v-list-item>
                  <v-list-item link class="ml-6">
                    <v-list-item-icon>
                      <v-icon>mdi-chart-pie</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      Deliquency
                      <br>Report
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list>
        <!-- </v-navigation-drawer> -->
      </v-card>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      // items: [
      //   { title: "Dashboard", icon: "dashboard" },
      //   { title: "Account", icon: "account_box" },
      //   { title: "Admin", icon: "gavel" }
      // ]
    };
  },
  methods: {
    gotoRoute(next) {
      this.$router.push({ path: next });
    }
  }
};
</script>
<style scoped>
#profile {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
.mt-cos {
  margin-top: 80px;
}
</style>
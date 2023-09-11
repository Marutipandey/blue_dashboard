<template>
  <v-app :class="theme">
    <!-- Navbar -->
    <v-app-bar app color="primary">
      <!-- Sidebar toggle button -->
      <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>

      <!-- Title -->
      <v-toolbar-title class="mr-auto">
        My App
      </v-toolbar-title>

      <!-- Icons on the right -->
      <v-spacer></v-spacer>

      <!-- Moon icon with theme toggle -->
      <v-icon start icon="mdi-weather-night" @click="changeTheme"></v-icon>
      <!-- Bell icon with dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon >mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="viewNotifications">View Notifications</v-list-item>
          <v-list-item @click="clearNotifications">Clear Notifications</v-list-item>
        </v-list>
      </v-menu>

      <!-- Account icon with dropdown menu -->
      <v-menu v-model="accountMenuOpen" offset-y position-x="right">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="toggleAccountMenu">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="goToProfile">Profile</v-list-item>
          <v-list-item @click="goToLandingPage">Landing Page</v-list-item>
          <v-list-item @click="refreshPage">Refresh Page</v-list-item>
          <v-list-item @click="logout">Logout</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sidebar -->
   <!-- Sidebar -->
<v-navigation-drawer app v-model="sidebarOpen" color="primary">
  <v-list>
    <v-list-item to="/">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      Dashboard
    </v-list-item>
    <v-list-item to="/about">
      <v-list-item-icon>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-list-item-icon>
      Programs
    </v-list-item>
    <v-list-item to="/leaderboardview">
      <v-list-item-icon>
        <v-icon>mdi-trophy-variant</v-icon>
      </v-list-item-icon>
      Leaderboard
    </v-list-item>
    <v-list-item to="/JobsView">
      <v-list-item-icon>
        <v-icon>mdi-briefcase-outline</v-icon>
      </v-list-item-icon>
      Jobs
    </v-list-item>
    <v-list-item to="/ChartView">
      <v-list-item-icon>
        <v-icon>mdi-account-group-outline</v-icon>
      </v-list-item-icon>
      Staff
    </v-list-item>
    <v-list-item to="/index">
      <v-list-item-icon>
        <v-icon>mdi-view-list</v-icon>
      </v-list-item-icon>
      Index
    </v-list-item>
    <v-list-item to="/hactivity">
      <v-list-item-icon>
        <v-icon>mdi-flash-circle-outline</v-icon>
      </v-list-item-icon>
      Hactivity
    </v-list-item>
    <v-list-item to="/settings">
      <v-list-item-icon>
        <v-icon>mdi-settings-outline</v-icon>
      </v-list-item-icon>
      Settings
    </v-list-item>
    <v-list-item to="/contact-admin">
      <v-list-item-icon>
        <v-icon>mdi-account-multiple-outline</v-icon>
      </v-list-item-icon>
      Contact Admin
    </v-list-item>
  </v-list>
</v-navigation-drawer>


    <!-- Main content -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      accountMenuOpen: false,
      theme: "light",
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleAccountMenu() {
      this.accountMenuOpen = !this.accountMenuOpen;
    },
    viewNotifications() {
      // Implement the logic to view notifications
    },
    clearNotifications() {
      // Implement the logic to clear notifications
    },
    goToProfile() {
      // Implement the logic to navigate to the profile page
    },
    goToLandingPage() {
      // Implement the logic to navigate to the landing page
    },
    refreshPage() {
      // Implement the logic to refresh the page
    },
    logout() {
      // Implement the logout logic
    },
    changeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
};
</script>

<style scoped>
.light {
  background-color: white !important;
  color: black !important;
}

.dark {
  background-color: black !important;
  color: white !important;
}
</style>

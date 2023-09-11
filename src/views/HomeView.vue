<template>
  <div class="home">
    <div class="text-center">
      <v-chip class="ma-2" color="primary" text-color="white" small>
        <v-avatar class="mx-1">
          <v-icon color="white" left>mdi-account-circle</v-icon>
        </v-avatar>
        Mike km priyanka sdfgnh

      </v-chip>

      <v-chip class="ma-2" color="orange" text-color="white" small>
        Premium
        <v-icon right>mdi-star</v-icon>
      </v-chip>

      <v-chip class="ma-2" color="info" text-color="white" small>
        1 Year
        <v-icon right>mdi-cake-variant</v-icon>
      </v-chip>

      <v-chip class="ma-2" color="success" text-color="white" small>
        <v-avatar class="mx-1 green darken-4">
          1
        </v-avatar>
        Years
      </v-chip>

      <v-chip class="ma-2" closable color="teal" text-color="white" small>
        <v-icon left>mdi-checkbox-marked-circle</v-icon>
        Confirmed
        <v-icon right>mdi-delete</v-icon>
      </v-chip>

      <v-chip class="ma-2" closable color="teal" text-color="white" small>
        <v-icon left>mdi-checkbox-marked-circle</v-icon>
        Confirmed
        <v-icon right>mdi-delete</v-icon>
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
/* Add your custom CSS styles here */
.home {
  /* background-color: #f0f0f0;  */
  padding: 20px; /* Add some padding to the container */
}

/* Adjust styles for v-chips */
.v-chip {
  font-weight: bold; /* Make the text bold */
}
</style>

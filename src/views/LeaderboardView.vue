<template>
    <v-container class="my-5">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive>
              <!-- Use an image here (e.g., person.image) -->
              <!-- <img :src="require('@/assets/logo.png')" alt="Person Image" /> -->
              <img :src="person.image" alt="Person Image" />

            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
  
            <v-card-actions>
              <v-btn flat color="primary">
                <v-icon small left>
                  mdi-message
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive>
              <!-- Use an image here (e.g., person.image) -->
              <!-- <img :src="require('@/assets/logo.png')" alt="Person Image" /> -->
              <img :src="person.image" alt="Person Image" />

            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
  
            <v-card-actions>
              <v-btn flat color="primary">
                <v-icon small left>
                  mdi-message
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </template>
  
  <script>
  export default {
    name: 'LeaderboardView',
    data() {
      return {
        team: [
          { name: 'hvfdghjkfhdhfdghfhfgfdhfjddhf', role: 'Web Developer', image: 'https://images.pexels.com/photos/7915492/pexels-photo-7915492.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { name: 'The Ndsfghet Ninja', role: 'dfgfg Developer', image: 'https://images.pexels.com/photos/5935783/pexels-photo-5935783.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { name: 'T dfghjk t Ninja', role: 'sdfg Developer', image: 'https://images.pexels.com/photos/7915432/pexels-photo-7915432.jpeg?auto=compress&cs=tinysrgb&w=600' },
          { name: 'wertry Net Ninja', role: 'sdf   eveloper', image: 'https://images.pexels.com/photos/7915255/pexels-photo-7915255.jpeg?auto=compress&cs=tinysrgb&w=600' },
        ],
        
      };
    },
  };
  </script>
  
  <style scoped>

  
  /* Add your custom CSS styles here if needed */
  /* For example, adjust card spacing and alignment */
  /* .v-card {
    margin: 100px;
    text-align: center;
  } */
  
  /* Add custom styles for the image */
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  
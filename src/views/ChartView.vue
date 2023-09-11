<template>
    <v-container>
      <v-row>
        <v-col>
          <!-- Bar Chart -->
          <canvas ref="barChartCanvas" style="width:100%;max-width:600px"></canvas>
        </v-col>
        <v-col>
          <!-- Line Chart -->
          <canvas ref="lineChartCanvas" style="width:100%;max-width:600px"></canvas>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables); // Register necessary plugins
  
  export default {
    name: "TwoTypeCharts",
    setup() {
      const barChartCanvas = ref(null);
      const lineChartCanvas = ref(null);
  
      onMounted(() => {
        // Bar Chart
        const barCtx = barChartCanvas.value.getContext('2d');
        new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Monthly Sales',
              data: [450, 560, 320, 800, 700, 900],
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Sales Amount'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              }
            }
          }
        });
  
        // Line Chart
        const lineCtx = lineChartCanvas.value.getContext('2d');
        new Chart(lineCtx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Monthly Revenue',
              data: [800, 750, 900, 700, 950, 850],
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 2,
              fill: false
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Revenue'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              }
            }
          }
        });
      });
  
      return {
        barChartCanvas,
        lineChartCanvas
      };
    }
  }
  </script>
  
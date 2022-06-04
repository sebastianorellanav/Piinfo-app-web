<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../src/components/navbar.vue"
import ApexCharts from 'apexcharts'
export default {
  name: 'App',
  components: {Navbar, ApexCharts},
  data: () => ({
    //
  }),
};
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary">Countries</button>
    <router-link type="button" class="btn btn-secondary" to="/reports">Report</router-link>
    <button type="button" class="btn btn-success">LogOut</button>

    <card-country v-for="country in countries" :key="country.id" :country="country" />
  </div>
</template>

<script>
import CardCountry from "../components/Card.vue";
export default {
  name: "Dashboard",
  components: {
    CardCountry
  },
  mounted() {
    this.$store.dispatch("getCountry");
  },
  computed: {
    countries() {
      let arr = this.$store.state.countries;
      return arr;
    }
  }
};
</script>

<style>
</style>
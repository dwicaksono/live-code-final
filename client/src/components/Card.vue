<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Country : {{country.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Death : {{country.deaths}}</h6>
      <p class="card-text">Recovered: {{country.recovered}}</p>
      <p class="card-text">Cases: {{country.cases}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCountry",
  props: ["country"]
};
</script>

<style>
</style>
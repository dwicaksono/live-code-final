<template>
  <div>
    <h1>report</h1>
    <form @submit.prevent="toReport">
      <div class="form-group">
        <label for="exampleFormControlInput1">Cases</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Cases"
          v-model="dataReport.cases"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Country select</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="dataReport.CountryId">
          <option value="1">China</option>
          <option value="2">Italy</option>
          <option value="3">Iran</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Report</button>
    </form>
    <br />
    <div class="card">
      <div class="card-body">test</div>
      {{reports.name}}
      <div class="card-body">This is some text within a card body.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
      dataReport: {
        cases: null,
        CountryId: null
      }
    };
  },

  mounted() {
    this.$store.dispatch("allReport");
  },
  computed: {
    reports() {
      let arr = this.$store.state.dataReports;
      return arr;
    }
  },
  methods: {
    toReport() {
      this.$store.dispatch("toReport", this.dataReport);
    }
  }
};
</script>

<style>
</style>
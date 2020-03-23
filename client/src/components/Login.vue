<template>
  <div>
    <form class="kotak" @submit.prevent="toLogin">
      <h1>LOGIN</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-control" v-model="dataLogin.username" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="dataLogin.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const server = "http://localhost:3000";
export default {
  name: "Login",
  data() {
    return {
      dataLogin: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    toLogin() {
      axios({
        method: "POST",
        url: `${server}/login`,
        data: this.dataLogin
      }).then(({ data }) => {
        localStorage.setItem("token", data.token);
        this.$router.push({
          path: "/dashboard"
        });
      });
    }
  }
};
</script>

<style scoped>
.kotak {
  margin: 1em 10em;
}
</style>
<template>
  <div>
    <Login v-if="!isLogin" />
    <dashboard v-if="isLogin" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

export default {
  name: "Home",
  data() {
    return {
      isLogin: false
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  components: {
    Login,
    Dashboard
  }
};
</script>

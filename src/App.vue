<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Login from "./components/LoginComponent/login"
import "./assets/css/base.scss"
export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <Navbar-component />
  <Movies />
</template>

<script>
import Movies from "@/layout/Movies";
import NavbarComponent from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Movies,
    NavbarComponent
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

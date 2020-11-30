<template>
  
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <p class="title">Bench Press Station</p>
    <!--  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <!--
  <div class="home">
    <img alt="Vue logo" src="../assets/fitness.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>  
  -->

<!--<nav class="navbar container is-fixed-top is-info" role="navigation" aria-label="main navigation">-->
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="../assets/benchLogo.png" height="28">
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu "  :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link to="/feed"  class="navbar-item" >Feed</router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <LoginBadge />
      </div>
    </div>
  </div>
</nav>


</template>

<script>
export default {
  name: "Nav"
}
</script>

<style>
</style>
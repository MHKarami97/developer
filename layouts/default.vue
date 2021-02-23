<template>
  <div>
    <nav-component/>
    <search-component/>
    <menu-component/>
    <main>
      <div class="main-content-wrapper">
        <Nuxt />
      </div>
    </main>
    <footer-component/>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Search from "../components/Search";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";

export default {
  components: {
    "menu-component": Menu,
    "search-component": Search,
    "nav-component": Topnav,
    "footer-component": Footer
  }
};
</script>

<template>
    <div>
      <sliders/>
      <services/>
      <why/>
      <plans/>
      <clients/>
      <clients-logo/>
      <blog-latest/>
      <helps/>
      <try/>
    </div>
</template>

<script>
import Sliders from "../components/Sliders";
import Services from "../components/Services";
import Why from "../components/Why";
import Plans from "../components/Plans";
import Clients from "../components/Clients";
import ClientsLogo from "../components/ClientsLogo";
import Helps from "../components/Helps";
import Try from "../components/Try";
import BlogLatest from "../components/BlogLatest";

export default {
  components: {
    BlogLatest,
    Try,
    Helps,
    ClientsLogo,
    Clients,
    Plans,
    Why,
    Services,
    Sliders
  }
}
</script>

<template>
  <section class="crumina-module crumina-module-slider crumina-main-slider">
    <!--Prev next buttons-->
    <div class="swiper-btn-prev">
      <svg class="crumina-icon">
        <use xlink:href="#icon-prev"></use>
      </svg>
    </div>
    <div class="swiper-btn-next">
      <svg class="crumina-icon">
        <use xlink:href="#icon-next"></use>
      </svg>
    </div>
    <div class="swiper-container" data-effect="fade" data-show-items="1" data-change-handler="thumbsParent"
         data-prev-next="1" data-autoplay="4000">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
<!--        <slide1/>-->
        <slide2/>
        <slide3/>
        <slide4/>
        <slide5/>
        <slide6/>
      </div>
      <!--Pagination tabs-->
      <slide-paginator/>
    </div>
  </section>
</template>

<script>
import SlidePaginator from "../components/SlidePaginator";
import Slide2 from "../components/Slide2";
import Slide3 from "../components/Slide3";
import Slide4 from "../components/Slide4";
import Slide5 from "../components/Slide5";
import Slide6 from "../components/Slide6";

export default {
  components: {
    Slide6,
    Slide5,
    Slide4,
    Slide3,
    Slide2,
    SlidePaginator
  }
};
</script>


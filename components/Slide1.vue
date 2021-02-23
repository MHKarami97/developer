<template>
  <div class="swiper-slide stunning-header-bg2">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="slider-content">
            <h2 class="slider-content-title" data-swiper-parallax="-100">{{ $t('slider.item1.info') }}</h2>
            <p class="slider-content-text" data-swiper-parallax="-200">{{ $t('slider.item1.description') }}</p>
            <div class="universal-btn-wrapper">
              <a href="" class="crumina-button button--blue button--l">{{ $t('slider.item1.button1') }}</a>
              <a href="" class="crumina-button button--red button--l">{{ $t('slider.item1.button2') }}</a>
            </div>
          </div>
          <div class="slider-thumb" data-swiper-parallax="-400" data-swiper-parallax-duration="600">
            <img class="swiper-lazy" src="assets/img/demo-content/images/slider1.png" alt="slider">
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

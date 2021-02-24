<template>
  <section class="large-section-padding section-bg2">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto align-center">
          <h2>{{ $t('client.title') }}</h2>
          <h6 class="fw-medium fs-18 text-white">{{ $t('client.description') }}</h6>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
          <div
            class="crumina-module crumina-module-slider crumina-slider--testimonial navigation-bottom-center pagination-bottom-center">

            <div class="swiper-btn-prev swiper-btn-white">
              <svg class="crumina-icon icon-line-arrow-left">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </div>

            <div class="swiper-btn-next swiper-btn-white">
              <svg class="crumina-icon icon-line-arrow-right">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </div>

            <div class="swiper-container" data-show-items="2" data-prev-next="1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="crumina-module crumina-testimonial-item testimonial--author-bottom">
                    <div class="testimonial-content">
                      <h6 class="testimonial-text">
                        {{ $t('client.item1.description') }}
                      </h6>
                    </div>
                    <div class="author-content-wrap">
                      <div class="avatar">
                        <img loading="lazy" src="assets/img/demo-content/avatars/author2.png" alt="avatar">
                      </div>
                      <div class="author-content">
                        <a href="#" class="author-name h6">{{ $t('client.item1.user') }}</a>
                        <div class="author-company">{{ $t('client.item1.user_info') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="crumina-module crumina-testimonial-item testimonial--author-bottom">
                    <div class="testimonial-content">
                      <h6 class="testimonial-text">
                        {{ $t('client.item2.description') }}
                      </h6>
                    </div>
                    <div class="author-content-wrap">
                      <div class="avatar">
                        <img loading="lazy" src="assets/img/demo-content/avatars/author4.png" alt="avatar">
                      </div>
                      <div class="author-content">
                        <a href="#" class="author-name h6">{{ $t('client.item2.user') }}</a>
                        <div class="author-company">{{ $t('client.item2.user_info') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="crumina-module crumina-testimonial-item testimonial--author-bottom">
                    <div class="testimonial-content">
                      <h6 class="testimonial-text">
                        {{ $t('client.item1.description') }}
                      </h6>
                    </div>
                    <div class="author-content-wrap">
                      <div class="avatar">
                        <img loading="lazy" src="assets/img/demo-content/avatars/author6.png" alt="avatar">
                      </div>
                      <div class="author-content">
                        <a href="#" class="author-name h6">{{ $t('client.item1.user') }}</a>
                        <div class="author-company">{{ $t('client.item1.user_info') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- If we need pagination -->
            <div class="swiper-pagination swiper-pagination-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

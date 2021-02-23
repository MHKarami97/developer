<template>
  <section class="large-section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 align-center mr-auto ml-auto mb-5">
          <h2>{{ $t('service.title') }}</h2>
          <p class="fs-18 fw-medium">{{ $t('service.description') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 mb-lg-0">
          <div class="crumina-module crumina-info-box info-box--icon-scaled">
            <h5 class="info-box-title">{{ $t('service.item1.title') }}</h5>
            <div class="info-box-thumb">
              <img loading="lazy" src="assets/img/demo-content/icons/info-icon36.png" alt="icon">
            </div>
            <div class="info-box-content">
              <p class="info-box-text">{{ $t('service.item1.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 mb-lg-0">
          <div class="crumina-module crumina-info-box info-box--icon-scaled">
            <h5 class="info-box-title">{{ $t('service.item2.title') }}</h5>
            <div class="info-box-thumb">
              <img loading="lazy" src="assets/img/demo-content/icons/info-icon37.png" alt="icon">
            </div>
            <div class="info-box-content">
              <p class="info-box-text">{{ $t('service.item2.description') }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 mb-lg-0">
          <div class="crumina-module crumina-info-box info-box--icon-scaled">
            <h5 class="info-box-title">{{ $t('service.item3.title') }}</h5>
            <div class="info-box-thumb">
              <img loading="lazy" src="assets/img/demo-content/icons/info-icon38.png" alt="icon">
            </div>
            <div class="info-box-content">
              <p class="info-box-text">{{ $t('service.item3.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

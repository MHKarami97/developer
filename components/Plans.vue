<template>
  <section class="pt120">
    <div class="container">
      <div class="row mb-5 align-items-end">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <h2>{{ $t('plan.title') }}</h2>
          <p class="fs-18 fw-medium">{{ $t('plan.description') }}</p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 align-right">
          <a href="#" class="crumina-button button--green button--l button--bordered">{{ $t('plan.more') }}</a>
        </div>
      </div>
    </div>
    <div class="pricing-tables-border-bottom-wrap">
      <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-border-bottom pricing-primary">
        <div class="main-pricing-content">
          <div class="pricing-thumb">
            <img loading="lazy" src="/assets/img/demo-content/pricing/pricing1.png" alt="Server">
          </div>
          <h5 class="pricing-title">{{ $t('plan.item1.title') }}</h5>
          <p class="pricing-description">{{ $t('plan.item1.description') }}</p>
          <a href="" class="pricing-link">
            <svg class="crumina-icon">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        <div class="bg-layer"></div>
      </div>
      <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-border-bottom pricing-red">
        <div class="main-pricing-content">
          <div class="pricing-thumb">
            <img loading="lazy" src="/assets/img/demo-content/pricing/pricing2.png" alt="Server">
          </div>
          <h5 class="pricing-title">{{ $t('plan.item2.title') }}</h5>
          <p class="pricing-description">{{ $t('plan.item2.description') }}</p>
          <a href="" class="pricing-link">
            <svg class="crumina-icon">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </div>

        <div class="bg-layer"></div>
      </div>
      <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-border-bottom pricing-orange">
        <div class="main-pricing-content">
          <div class="pricing-thumb">
            <img loading="lazy" src="/assets/img/demo-content/pricing/pricing3.png" alt="Server">
          </div>
          <h5 class="pricing-title">{{ $t('plan.item3.title') }}</h5>
          <p class="pricing-description">{{ $t('plan.item3.description') }}</p>
          <a href="" class="pricing-link">
            <svg class="crumina-icon">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        <div class="bg-layer"></div>
      </div>
      <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-border-bottom pricing-yellow">
        <div class="main-pricing-content">
          <div class="pricing-thumb">
            <img loading="lazy" src="/assets/img/demo-content/pricing/pricing4.png" alt="Server">
          </div>
          <h5 class="pricing-title">{{ $t('plan.item4.title') }}</h5>
          <p class="pricing-description">{{ $t('plan.item4.description') }}</p>
          <a href="" class="pricing-link">
            <svg class="crumina-icon">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        <div class="bg-layer"></div>
      </div>
      <div class="crumina-module crumina-pricing-tables-item pricing-tables-item-border-bottom pricing-blue">
        <div class="main-pricing-content">
          <div class="pricing-thumb">
            <img loading="lazy" src="/assets/img/demo-content/pricing/pricing5.png" alt="Server">
          </div>
          <h5 class="pricing-title">{{ $t('plan.item5.title') }}</h5>
          <p class="pricing-description">{{ $t('plan.item5.description') }}</p>
          <a href="" class="pricing-link">
            <svg class="crumina-icon">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        <div class="bg-layer"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

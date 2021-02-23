<template>
  <section class="large-section-padding bg-yellow-themes">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mb-md-0">
          <h2>{{ $t('why.title') }}</h2>
          <p class="fs-18 fw-medium">{{ $t('why.description') }}</p>
          <div class="accordion crumina-module crumina-accordion accordion--style1 mt-5" id="accordion1">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                          aria-expanded="true" aria-controls="collapseOne">
                    {{ $t('why.item1.title') }}
                    <span class="icons">
											<svg class="crumina-icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
											<svg class="crumina-icon active icon-minus"><use xlink:href="#icon-minus"></use></svg>
										</span>
                  </button>
                </h2>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                <div class="card-body">
                  {{ $t('why.item1.description') }}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
                          aria-expanded="false" aria-controls="collapseTwo">
                    {{ $t('why.item2.title') }}
                    <span class="icons">
											<svg class="crumina-icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
											<svg class="crumina-icon active icon-minus"><use xlink:href="#icon-minus"></use></svg>
										</span>
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                <div class="card-body">
                  {{ $t('why.item2.description') }}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {{ $t('why.item3.title') }}
                    <span class="icons">
											<svg class="crumina-icon icon-plus"><use xlink:href="#icon-plus"></use></svg>
											<svg class="crumina-icon active icon-minus"><use xlink:href="#icon-minus"></use></svg>
										</span>
                  </button>
                </h2>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                <div class="card-body">
                  {{ $t('why.item3.description') }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img loading="lazy" src="/assets/img/demo-content/images/image15.png" alt="hostsight">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<template>
  <section class="pb120">
    <div class="container">
      <div class="row tabs tabs--style7">
        <div class="block-border-linear-gradient">
          <div class="block-border-linear-gradient-top"></div>
          <div class="block-border-linear-gradient-right"></div>
          <div class="block-border-linear-gradient-bottom"></div>
          <div class="block-border-linear-gradient-left"></div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div class="nav nav-tabs" id="myTab7" role="tablist">
            <a class="nav-item nav-link active" id="domains-tab" data-toggle="tab" href="#domains" role="tab"
               aria-controls="domains" aria-selected="true">
              {{ $t('help.item1.title') }}
            </a>
            <a class="nav-item nav-link" id="web-hosting-tab" data-toggle="tab" href="#web-hosting" role="tab"
               aria-controls="web-hosting" aria-selected="false">
              {{ $t('help.item2.title') }}
            </a>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div class="tab-content" id="myTabContent7">
            <div class="tab-pane fade show active" id="domains" role="tabpanel" aria-labelledby="domains-tab">

              <h5 class="mb-2">{{ $t('help.item1.help1.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item1.help1.description') }}
              </p>

              <h5 class="mb-2">{{ $t('help.item1.help2.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item1.help2.description') }}
              </p>

              <h5 class="mb-2">{{ $t('help.item1.help3.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item1.help3.description') }}
              </p>

              <a href="#" class="crumina-button button--lime button--l mt-2">{{ $t('help.item2.more') }}</a>
            </div>

            <div class="tab-pane fade" id="web-hosting" role="tabpanel" aria-labelledby="web-hosting-tab">

              <h5 class="mb-2">{{ $t('help.item2.help1.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item2.help1.description') }}
              </p>

              <h5 class="mb-2">{{ $t('help.item2.help2.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item2.help2.description') }}
              </p>

              <h5 class="mb-2">{{ $t('help.item2.help3.title') }}</h5>
              <p class="mb-4">
                {{ $t('help.item2.help3.description') }}
              </p>

              <a href="#" class="crumina-button button--lime button--l mt-2">{{ $t('help.item2.more') }}</a>
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

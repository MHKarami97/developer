<template>
  <div class="modal fade window-popup popup-search" id="popupSearch" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="modal-close-btn-wrapper">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
                  <svg class="crumina-icon">
                    <use xlink:href="#icon-close"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="navigation-search-popup">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 m-auto">
                  <h2 class="fw-medium text-white">{{ $t('search.title') }}</h2>
                  <form class="search-popup-form">
                    <div class="input-btn--inline">
                      <input class="input--dark" type="text" :placeholder="$t('search.placeholder')"/>
                      <button type="button" class="crumina-button button--primary button--l">{{
                          $t('search.button')
                        }}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

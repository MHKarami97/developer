<template>
  <nav id="navigation" class="site-header navigation navigation-justified header--sticky">
    <div class="container">
      <div class="navigation-header">
        <div class="navigation-logo">
          <a href="">
            <img loading="lazy" src="assets/img/demo-content/logo-white.png" alt="logo">
          </a>
        </div>
        <div class="navigation-button-toggler">
          <i class="hamburger-icon"></i>
        </div>
      </div>
      <div class="navigation-body">
        <div class="navigation-body-header">
          <div class="navigation-logo">
            <a href="">
              <img loading="lazy" src="assets/img/demo-content/logo-white.png" alt="logo">
            </a>
          </div>
          <span class="navigation-body-close-button">&#10005;</span>
        </div>
        <ul class="navigation-menu">
          <li class="navigation-item is-active">
            <a class="navigation-link" href="#">{{ $t('nav.all.title') }}</a>
            <div class="navigation-megamenu">
              <div class="navigation-megamenu-container">
                <div class="navigation-row">
                  <div class="navigation-col">
                    <a href="" class="navigation-hosting-item border-primary-themes">
                      <img class="navigation-hosting-item-img " loading="lazy"
                           src="assets/img/demo-content/navigation-hostings/hosting1.png" alt="hosting">
                      {{ $t('nav.all.info1') }}
                    </a>
                  </div>
                  <div class="navigation-col">
                    <a href="" class="navigation-hosting-item border-red-themes">
                      <img class="navigation-hosting-item-img " loading="lazy"
                           src="assets/img/demo-content/navigation-hostings/hosting2.png" alt="hosting">
                      {{ $t('nav.all.info2') }}
                    </a>
                  </div>
                  <div class="navigation-col">
                    <a href="" class="navigation-hosting-item border-orange-themes">
                      <img class="navigation-hosting-item-img " loading="lazy"
                           src="assets/img/demo-content/navigation-hostings/hosting3.png" alt="hosting">
                      {{ $t('nav.all.info3') }}
                    </a>
                  </div>
                  <div class="navigation-col">
                    <a href="" class="navigation-hosting-item border-yellow-themes">
                      <img class="navigation-hosting-item-img " loading="lazy"
                           src="assets/img/demo-content/navigation-hostings/hosting4.png" alt="hosting">
                      {{ $t('nav.all.info4') }}
                    </a>
                  </div>
                  <div class="navigation-col">
                    <a href="" class="navigation-hosting-item border-blue-themes">
                      <img class="navigation-hosting-item-img " loading="lazy"
                           src="assets/img/demo-content/navigation-hostings/hosting5.png" alt="hosting">
                      {{ $t('nav.all.info5') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="navigation-item">
            <a class="navigation-link" href="#">{{ $t('nav.more.title') }}</a>
            <ul class="navigation-dropdown">
              <li class="navigation-dropdown-item">
                <a class="navigation-dropdown-link" href="">{{ $t('nav.more.info1') }}</a>
              </li>
              <li class="navigation-dropdown-item">
                <a class="navigation-dropdown-link" href="">{{ $t('nav.more.info2') }}</a>
              </li>
              <li class="navigation-dropdown-item">
                <a class="navigation-dropdown-link" href="#">
                  {{ $t('nav.more.info3') }}
                  <span class="submenu-indicator"></span>
                </a>
                <ul class="navigation-dropdown">
                  <li class="navigation-dropdown-item">
                    <a class="navigation-dropdown-link" href="">{{ $t('nav.more.info_more1') }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="navigation-item">
            <a class="navigation-link" href="#">{{ $t('nav.page.title') }}</a>
            <div class="navigation-megamenu navigation-megamenu-half">
              <div class="navigation-megamenu-container">
                <div class="navigation-row">
                  <div class="navigation-col">
                    <ul class="navigation-list">
                      <li class="navigation-list-heading">
                        {{ $t('nav.page.title_bold') }}
                        <span class="navigation-list-subheading">{{ $t('nav.page.description') }}</span>
                      </li>
                      <li><a href="">{{ $t('nav.page.info1') }}</a></li>
                    </ul>
                  </div>
                  <div class="navigation-col">
                    <ul class="navigation-list">
                      <li class="navigation-list-heading">
                        {{ $t('nav.page.title_bold') }}
                        <span class="navigation-list-subheading">{{ $t('nav.page.description') }}</span>
                      </li>
                      <li><a href="">{{ $t('nav.page.info1') }}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="navigation-item">
            <a class="navigation-link" href="#">
              {{ $t('nav.support.title') }}
            </a>
            <ul class="navigation-dropdown">
              <li class="navigation-dropdown-item">
                <a class="navigation-dropdown-link" href="">{{ $t('nav.support.info1') }}</a>
              </li>
            </ul>
          </li>
          <li class="navigation-item">
            <a class="navigation-link" href="">{{ $t('nav.blog') }}</a>
          </li>
        </ul>
        <div class="navigation-body-section navigation-additional-menu">
          <a href="#" class="crumina-button button--green button--xs">{{ $t('nav.info') }}</a>
          <div class="navigation-search">
            <div class="link-modal-popup" data-toggle="modal" data-target="#popupSearch"></div>
            <svg class="crumina-icon">
              <use xlink:href="#icon-search"></use>
            </svg>
          </div>
          <div class="navigation-user-menu">
            <div class="link-modal-popup" data-toggle="modal" data-target="#userMenuPopup"></div>
            <svg class="crumina-icon">
              <use xlink:href="#icon-user-menu"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<template>
  <footer id="site-footer" class="footer footer--dark footer--with-decoration">
    <div class="footer-content">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
            <div class="widget widget_links">
              <h5 class="widget-title">
                {{ $t('footer.widget.w1.title') }}
              </h5>
              <ul>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w1.link1_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w1.link2_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w1.link3_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
            <div class="widget widget_links">
              <h5 class="widget-title">
                {{ $t('footer.widget.w2.title') }}
              </h5>
              <ul>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w2.link1_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w2.link2_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    {{ $t('footer.widget.w2.link3_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
            <div class="widget widget_links">
              <h5 class="widget-title">
                {{ $t('footer.widget.w3.title') }}
              </h5>
              <ul>
                <li>
                  <a href="https://itarfand.com">
                    {{ $t('footer.widget.w3.link1_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://forum.itarfand.com">
                    {{ $t('footer.widget.w3.link2_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://shop.itarfand.com">
                    {{ $t('footer.widget.w3.link3_title') }}
                    <svg class="crumina-icon">
                      <use xlink:href="#icon-triangle-arrow"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-0 mb-lg-0">
            <div class="widget w-info">
              <a href="" class="site-logo">
                <img loading="lazy" src="assets/img/demo-content/logo-white.png" alt="logo" width="185">
              </a>
              <p>{{ $t('footer.description') }}</p>
              <ul class="socials">
                <li>
                  <a href="https://facebook.com/mhkarami97">
                    <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/facebook.png"
                         alt="facebook">
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mhkarami97">
                    <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/twitter.png"
                         alt="twitter">
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mhkarami97">
                    <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/linkedin.png"
                         alt="linkedin">
                  </a>
                </li>
                <li>
                  <a href="http://youtube.com/channel/UCaRptrYsQnTAdxYoYpAANsw/">
                    <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/youtube.png"
                         alt="youtube">
                  </a>
                </li>
                <li>
                  <a href="mailto:mhkarami97@gmail.com">
                    <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/email.png" alt="email">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-subscribe-panel">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-4 mb-lg-0">
            <h5 class="footer-subscribe-panel-title text-white">{{ $t('footer.subscribe.text') }}</h5>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-4 mb-lg-0">
            <span class="footer-subscribe-panel-subtitle">{{ $t('footer.subscribe.description') }}</span>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12 mb-0 mb-lg-0">
            <form class="footer-subscribe-form">
              <div class="input-btn--inline">
                <input class="input--dark" type="text" :placeholder="$t('footer.subscribe.placeholder')"/>
                <button type="button" class="crumina-button button--lime button--l">
                  {{ $t('footer.subscribe.button') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-footer bg-black">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mb-0 mb-lg-0">
            <div class="copyright">
              <span>{{ $t('footer.copyright.description') }} <a
                href="https://mhkarami97.ir">{{ $t('footer.copyright.site') }}</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="back-to-top" href="#">
      <svg class="crumina-icon">
        <use xlink:href="#icon-to-top"></use>
      </svg>
    </a>
  </footer>
</template>

<script>
export default {}
</script>

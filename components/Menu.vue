<template>
  <div class="modal fade window-popup user-menu-popup" id="userMenuPopup" tabindex="-1" role="dialog"
       aria-hidden="true">
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
          <div class="user-menu">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 m-auto">
                  <a href="" class="site-logo">
                    <img loading="lazy" src="assets/img/demo-content/logo-colored.png" alt="logo" width="185">
                  </a>
                  <p class="fw-medium">{{ $t('menu.description') }}</p>
                  <!--                  <form class="sign-in-form">-->
                  <!--                    <h6 class="text-white">SIGN IN TO YOUR ACCOUNT</h6>-->
                  <!--                    <div class="form-item">-->
                  <!--                      <input class="input&#45;&#45;dark input&#45;&#45;squared" type="text" placeholder="Username or email">-->
                  <!--                    </div>-->
                  <!--                    <div class="form-item">-->
                  <!--                      <input class="input&#45;&#45;dark input&#45;&#45;squared" type="password" placeholder="Password">-->
                  <!--                    </div>-->
                  <!--                    <div class="form-item">-->
                  <!--                      <div class="remember-wrapper text-white">-->
                  <!--                        <div class="checkbox">-->
                  <!--                          <label>-->
                  <!--                            <input type="checkbox" name="optionsCheckboxes4">-->
                  <!--                            Remember Me-->
                  <!--                          </label>-->
                  <!--                        </div>-->
                  <!--                        <a href="#">Lost your password?</a>-->
                  <!--                      </div>-->
                  <!--                    </div>-->
                  <!--                    <div class="form-item">-->
                  <!--                      <button type="button" class="crumina-button button&#45;&#45;primary button&#45;&#45;l w-100">Sign In</button>-->
                  <!--                    </div>-->
                  <!--                  </form>-->
                  <!--                  <p class="text-white fw-medium">Sign In with social networks:</p>-->
                  <!--                  <ul class="socials">-->
                  <!--                    <li>-->
                  <!--                      <a href="#">-->
                  <!--                        <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/facebook.png" alt="facebook">-->
                  <!--                      </a>-->
                  <!--                    </li>-->
                  <!--                    <li>-->
                  <!--                      <a href="#">-->
                  <!--                        <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/twitter.png" alt="twitter">-->
                  <!--                      </a>-->
                  <!--                    </li>-->
                  <!--                    <li>-->
                  <!--                      <a href="#">-->
                  <!--                        <img class="crumina-icon " loading="lazy" src="assets/img/theme-content/social-icons/google.png" alt="google">-->
                  <!--                      </a>-->
                  <!--                    </li>-->
                  <!--                  </ul>-->
                  <!--                  <button type="button" class="crumina-button button&#45;&#45;grey button&#45;&#45;l button&#45;&#45;bordered w-100">CREATE AN ACCOUNT</button>-->
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

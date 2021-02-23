<template>
  <section class="large-section-padding">
    <div class="container">
      <div class="row mb-5 align-center justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <h2>{{ $t('blog.title') }}</h2>
          <p class="fs-18 fw-medium">{{ $t('blog.description') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb30">
          <article class="entry post post-standard has-post-thumbnail">
            <div class="post-thumb">
              <img loading="lazy" src="/assets/img/demo-content/blog/blog1.jpg" alt="Technology">
            </div>
            <div class="post-content">
              <div class="post-category-wrap">
                <a href="#" class="post-category">{{ $t('blog.item1.tag1') }}</a>,
                <a href="#" class="post-category">{{ $t('blog.item1.tag2') }}</a>
              </div>
              <a href="" class="post-title h6">{{ $t('blog.item1.title') }}</a>
              <div class="post-text">
                <p>{{ $t('blog.item1.description') }}</p>
              </div>
              <div class="post-additional-info">
                <div class="author-posted">
                  <a href="#" class="author">{{ $t('blog.more') }}</a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb30">
          <article class="entry post post-standard has-post-thumbnail">
            <div class="post-thumb">
              <img loading="lazy" src="/assets/img/demo-content/blog/blog1.jpg" alt="Technology">
            </div>
            <div class="post-content">
              <div class="post-category-wrap">
                <a href="#" class="post-category">{{ $t('blog.item1.tag1') }}</a>,
                <a href="#" class="post-category">{{ $t('blog.item1.tag2') }}</a>
              </div>
              <a href="" class="post-title h6">{{ $t('blog.item1.title') }}</a>
              <div class="post-text">
                <p>{{ $t('blog.item1.description') }}</p>
              </div>
              <div class="post-additional-info">
                <div class="author-posted">
                  <a href="#" class="author">{{ $t('blog.more') }}</a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb30">
          <article class="entry post post-standard has-post-thumbnail">
            <div class="post-thumb">
              <img loading="lazy" src="/assets/img/demo-content/blog/blog1.jpg" alt="Technology">
            </div>
            <div class="post-content">
              <div class="post-category-wrap">
                <a href="#" class="post-category">{{ $t('blog.item1.tag1') }}</a>,
                <a href="#" class="post-category">{{ $t('blog.item1.tag2') }}</a>
              </div>
              <a href="" class="post-title h6">{{ $t('blog.item1.title') }}</a>
              <div class="post-text">
                <p>{{ $t('blog.item1.description') }}</p>
              </div>
              <div class="post-additional-info">
                <div class="author-posted">
                  <a href="#" class="author">{{ $t('blog.more') }}</a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 align-center">
          <a href="" class="crumina-button button--dark button--l">{{ $t('blog.more') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

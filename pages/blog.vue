<template>
  <main>
    <TopMenu />


       <!-- Start home -->
    <section class="bg-half blog-cover page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">Blog</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="index.html" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">Blog</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->

    <!-- blog start -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div v-for="(resultado, index) in resultados" :key="index" class="col-lg-4 col-md-6 mb-4 pb-2">
                    <div class="blog position-relative overflow-hidden shadow rounded">
                        <div class="position-relative overflow-hidden">
                            <img :src="resultado.banner_noticias" class="img-fluid rounded-top" alt="">
                            <div class="overlay rounded-top bg-dark"></div>
                            <!-- <div class="likes">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-white like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-white comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                            </div> -->
                        </div>
                        <div class="content p-4">
                            <h4><a :href="`/blog-detalhe?id=${resultado.id_noticias}`" class="title text-dark">{{resultado.titulo_noticias}}</a></h4>
                            <!-- <p class="text-muted" style="
                                                display: -webkit-box;
                                                -webkit-line-clamp: 3;
                                                -webkit-box-orient: vertical;
                                                overflow: hidden;">{{resultado.texto_noticias || '/images/old/detalhe.jpg'}}</p> -->
                            <a :href="`/blog-detalhe?id=${resultado.id_noticias}`" class="text-dark readmore">Ver Notícia<i class="mdi mdi-chevron-right"></i></a>
                        </div>
                        <!-- <div class="author">
                            <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)" class="text-light user">Dirio Walls</a></p>
                            <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 25 Sep, 2019</p>
                        </div> -->
                    </div>
                </div><!--end col-->

                <div class="col-lg-12 mt-4 pt-2">
                  <div class="w-100 row align-items-center mt-5">
                      <div class="col-lg-12">
                          <div class="row show-results">
                              <div class="mx-auto text-center">
                                    <h5 class="text-dark mb-0 pt-2 f-18">
                                      {{totalItems}} resultados</h5>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

                        <div class="col-lg-12 mt-4 pt-2">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination job-pagination mb-0 justify-content-center">


                                    <li class="page-item">
                                        <a
                                          :class="currentPage <= 1 ? 'disabled' : ''"
                                          class="page-link"
                                          @click="fetchNews(1)"
                                        >
                                            <i class="mdi mdi-chevron-double-left"></i>
                                        </a>
                                    </li>

                                    <li class="page-item">
                                        <a
                                          v-if="currentPage > 1"
                                          class="page-link"
                                          @click="fetchNews(currentPage - 1)"
                                        >
                                            <i class="mdi mdi-chevron-left"></i>
                                        </a>
                                    </li>

                                    <li class="page-item active"><a class="page-link" href="#">{{currentPage}}</a></li>

                                    <li v-if="nextPage <= totalPages" class="page-item">
                                        <a v-if="nextPage"
                                          class="page-link"
                                          @click="fetchNews(currentPage + 1)"
                                        >
                                            <i class="mdi mdi-chevron-right"></i>
                                        </a>
                                    </li>

                                    <li v-if="nextPage <= totalPages" class="page-item">
                                        <a class="page-link"
                                          disabled
                                          @click="fetchNews(totalPages)"
                                        >
                                            <i class="mdi mdi-chevron-double-right"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div class="mt-3 text-center"> de {{ totalPages }} páginas</div>
                            </nav>
                        </div>

            </div>
        </div>
    </section>
    <!-- blog end -->

    <BottomMenu />
  </main>
</template>
<script>
export default {
  data() {
    return {
      url: process.env.baseUrl,
      resultados: [],

      /* pagination */
      totalPages: null,
      currentPage: null,
      prevPage: null,
      nextPage: null,
      totalItems: null,
    }
  },
  mounted() {

    /* fetch news */
    this.fetchNews(1)

  },
  methods: {
    fetchNews(page) {
      this.$axios.$get(`${this.url}/noticias?noticia=&page=${ page }`)
      .then(res => {
          this.resultados = res.items
          this.totalPages = res.pages.totalPages
          this.currentPage = res.pages.currentPage
          this.prevPage = res.pages.prevPage
          this.nextPage = res.pages.nextPage
          this.totalItems = res.pages.totalItems
      })
      .catch(err => console.trace(err))
    }
  }

}
</script>

<style>

</style>

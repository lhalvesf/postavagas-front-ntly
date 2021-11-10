<template>
  <main>
    <TopMenu />

<!-- Start home -->
    <section class="bg-half blog-detalhe-2 page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">{{ resultados.titulo_noticias }}</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="/" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">{{ resultados.titulo_noticias }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->

    <!-- BLOG LIST START -->
    <section class="section">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-md-6 col-12 order-1 order-md-2">
                    <div class="shadow rounded p-4">
                        <div class="blog-details-img">
                            <img :src="resultados.banner_noticias" alt="" class="img-fluid mx-auto rounded d-block">
                        </div>
                        <div class="blog-details meta mt-3">
                            <ul class="list-inline mb-1">
                                <li class="list-inline-item mr-4">
                                    <p class="text-muted mb-0"><i class="mdi mdi-calendar-range mr-1"></i>{{resultados.data_noticias}}</p>
                                </li>
                            </ul>
                        </div>

                        <div class="blog-details-desc p-2">
                            <h5 class="mb-3"><a href="#" class="text-dark">{{ resultados.titulo_noticias }}</a></h5>

                            <p class="text-muted mb-3 f-13" v-html="resultados.texto_noticias"></p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- BLOG LIST END -->

    <BottomMenu />
  </main>
</template>


<script>
export default {
  data() {
    return {
      url: process.env.baseUrl,
      resultados: []
    }
  },
  mounted() {
    /* carga inicial de dados */
    const {id} = this.$route.query
    this.buscaNoticias(id)
  },
  methods: {
    buscaNoticias(id) {
      /* fetch vagas */
      this.$axios.$get(`${this.url}/noticia?id=${id}`)
      .then(res => {
        this.resultados = res.items[0]
      })
      .catch(err => console.trace(err))
    }
  }

}
</script>

<style>

</style>

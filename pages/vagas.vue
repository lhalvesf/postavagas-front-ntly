<template>
  <main>
    <TopMenu />

 <!-- Start home -->
    <section class="bg-half vagas page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">Encontre a vaga que você merece</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="index.html" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">Vagas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->

    <div class="container">
        <div class="home-form-position">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="home-registration-form job-list-reg-form bg-light shadow p-4 mb-3">
                        <form class="registration-form">
                            <div class="row">
                                <div class="col-lg-3 col-md-6">
                                    <div class="registration-form-box">
                                        <i class="fa fa-briefcase"></i>
                                        <input id="exampleInputName1" v-model="vagaTermo" type="text" class="form-control rounded registration-input-box" placeholder="Vagas..">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="registration-form-box">
                                      <i class="fa fa-location-arrow"></i>
                                      <select id="select-country"     v-model="estadoSelecionado" class="form-control rounded registration-input-box">
                                          <option :value="null" disabled>Estado</option>
                                          <option v-for="(estado, index) in estados" :key="index" :value="estado.id">{{estado.name}}</option>
                                      </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="registration-form-box">
                                      <i class="fa fa-list-alt"></i>
                                      <select v-if="cidades === null" id="select-category" disabled class="form-control rounded registration-input-box">
                                          <option value="">Cidade</option>
                                      </select>
                                      <select v-else id="select-category" v-model="cidadeSelecionada" class="form-control rounded registration-input-box">
                                          <option value="">Cidade</option>
                                          <option v-for="(cidade, index) in cidades" :key="index" :value="cidade.id">{{cidade.name}}</option>
                                      </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="registration-form-box">
                                        <input id="submit" type="button" name="send" class="submitBnt btn btn-primary btn-block"
                                        value="Buscar"
                                        @click="realizaBusca($event)">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- JOB LIST START -->
    <section class="section pt-0">
        <div class="container">

                <div class="col-lg-8 col-12 offset-lg-2 mt-4 pt-2">

                    <div v-if="resultados.length > 0" class="row">
                      <div v-for="(resultado, index) in resultados" :key="index" class="col-lg-12 mt-4 pt-2">
                          <div class="job-list-box border rounded">
                              <div class="p-3">
                                <div class="row align-items-center">
                                  <div class="col-lg-9 col-md-9">
                                    <div class="job-list-desc">

                                          <h6 class="mb-2"><a :href="`/vaga-detalhe?id=${resultado.id_vagas}`" class="text-dark">{{resultado.nome_vagas}}</a></h6>
                                                <p class="text-muted mb-0"
                                                style="
                                                display: -webkit-box;
                                                -webkit-line-clamp: 3;
                                                -webkit-box-orient: vertical;
                                                overflow: hidden;"
                                                v-html="resultado.requisitos_vagas"></p>
                                                <br/>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item mr-3">
                                                        <p class="text-muted mb-0"><i class="mdi mdi-map-marker mr-2"></i>{{resultado.cidade_vagas}}</p>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <p class="text-muted mb-0"><i class="mdi mdi-currency-usd mr-2"></i>{{ resultado.salario_vagas }}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3">
                                            <div class="job-list-button-sm text-right">
                                                <span v-if="resultado.vaga_recente" class="badge badge-success">Vaga recente</span>

                                                <div class="mt-3">
                                                    <a :href="`/vaga-detalhe?id=${resultado.id_vagas}`" class="btn btn-sm btn-primary">Ver Vaga</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row align-items-center mx-auto mt-5">
                          <div class="col-lg-12">
                              <div class="show-results">
                                  <div class="float-left">
                                       <h5 class="text-dark mb-0 pt-2 f-18">
                                         {{totalItems}} resultados</h5>
                                  </div>
                              </div>
                          </div>
                      </div>




                        <!-- <div v-if="totalPages > 1" class="col-lg-12 mt-4 pt-2"> -->
                        <div class="col-lg-12 mt-4 pt-2">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination job-pagination mb-0 justify-content-center">

                                    <li class="page-item">
                                        <a
                                          :class="currentPage <= 1 ? 'disabled' : ''"
                                          class="page-link"
                                          @click="buscaVagas(vagaTermo, estadoSelecionado, cidadeSelecionada, 1)"
                                        >
                                            <i class="mdi mdi-chevron-double-left"></i>
                                        </a>
                                    </li>

                                    <li class="page-item">
                                        <a
                                          v-if="currentPage > 1"
                                          class="page-link"
                                          @click="buscaVagas(vagaTermo, estadoSelecionado, cidadeSelecionada, currentPage - 1)"
                                        >
                                            <i class="mdi mdi-chevron-left"></i>
                                        </a>
                                    </li>

                                    <li class="page-item active"><a class="page-link" href="#">{{currentPage}}</a></li>

                                    <li v-if="nextPage <= totalPages" class="page-item">
                                        <a v-if="nextPage"
                                          class="page-link"
                                          @click="buscaVagas(vagaTermo, estadoSelecionado, cidadeSelecionada, currentPage + 1)"
                                        >
                                            <i class="mdi mdi-chevron-right"></i>
                                        </a>
                                    </li>

                                    <li v-if="nextPage <= totalPages" class="page-item">
                                        <a class="page-link"
                                          disabled
                                          @click="buscaVagas(vagaTermo, estadoSelecionado, cidadeSelecionada, totalPages)"
                                        >
                                            <i class="mdi mdi-chevron-double-right"></i>
                                        </a>
                                    </li>

                                </ul>
                                <div class="mt-3 text-center"> de {{ totalPages }} páginas</div>
                            </nav>
                        </div>



                    </div>
                    <div v-else class="row">
                      Busca Sem Resultados – Tente Novamente
                    </div>
                </div>
            </div>
    </section>
    <!-- JOB LIST START -->



    <BottomMenu />
  </main>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.baseUrl,
      resultados: [],

      estados: [],
      cidades: null,
      vagaTermo: null,
      estadoSelecionado: null,
      cidadeSelecionada: null,

      /* pagination */
      totalPages: null,
      currentPage: null,
      prevPage: null,
      nextPage: null,
      totalItems: null,
    }
  },
  watch: {
    estadoSelecionado(value) {
      this.estados.filter(estado => {
        if (estado.id === value.toString()) {
          this.cidades = estado.cidades
        }
        return null
      })
    },
  },
  mounted() {

    const {vaga, uf, cidade} = this.$route.query

    if ( vaga ) { this.vagaTermo = vaga }
    if ( uf ) { this.estadoSelecionado = uf }
    if ( cidade ) { this.cidadeSelecionada = cidade }

    /* fetch cities */
    this.$axios.$get(`${window.location.href}data/cidades.json`)
    .then(res => {
        res.states.map(uf => {
          return this.estados.push({
            id: uf.id,
            name: uf.name,
            cidades: uf.cities,
          })
        })
    })
    .catch(err => console.trace(err))

    /* carga inicial de dados */
    this.buscaVagas(vaga, uf, cidade)
  },
  methods: {
    buscaVagas(vaga, uf, cidade, page) {
      /* fetch vagas */
      this.$axios.$get(`${this.url}/vagas?vaga=${vaga || null}&uf=${uf || null}&cidade=${cidade || null}&page=${page}`)
      .then(res => {
        this.resultados = res.items
        this.totalPages = res.pages.totalPages
        this.currentPage = res.pages.currentPage
        this.prevPage = res.pages.prevPage
        this.nextPage = res.pages.nextPage
        this.totalItems = res.pages.totalItems
      })
      .catch(err => console.trace(err))
    },
    realizaBusca(event) {
      /* perform search with provided parameters */
      event.preventDefault()

      window.location = (`/vagas?vaga=${this.vagaTermo || null}&uf=${this.estadoSelecionado || null}&cidade=${this.cidadeSelecionada || null}`)

    }
  }

}
</script>

<style>

</style>

<template>
  <main>
    <TopMenu />
     <!-- Start Home -->
    <section class="bg-home" style="background: url('/images/old/home/header-background-1.jpg') center center;">
        <div class="bg-overlay"></div>
        <div class="home-center">
            <div class="home-desc-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="title-heading text-center text-white">
                                <h6 class="small-title text-uppercase text-light mb-3">A forma mais fácil de encontrar sua vaga ideal.</h6>
                                <h1 class="heading font-weight-bold mb-4">Encontre a vaga que você merece.</h1>
                            </div>
                        </div>
                    </div>
                    <div class="home-form-position">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="home-registration-form p-4 mb-3">
                                    <form class="registration-form">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-6">
                                                <div class="registration-form-box">
                                                    <i class="fa fa-briefcase"></i>
                                                    <input id="exampleInputName1" v-model="vagaTermo" type="text" class="form-control rounded registration-input-box" placeholder="Vaga..">
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
                                                    @click="realizaBusca($event)"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->


    <!-- ABOUT US START -->
    <section class="section">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-5 col-md-4">
                  <img src="/images/old/home/vagas-imagem-destaque.jpg" class="img-fluid rounded shadow" alt="">
              </div>

              <div class="col-lg-7 col-md-8">
                  <div class="about-desc ml-lg-4">
                      <h3 class="text-dark mb-5">Encontre a vaga que se encaixa no seu perfil</h3>

                      <h4 class="text-dark mb-5">Destaque seu currículo enviando através do Posta Vagas. Contato direto entre você e o contratante.</h4>



                      <ul style="list-style: none; margin-left: -40px;">
                        <li><p><i class="mdi mdi-check mr-1 text-success"></i> Sistema Avançado de Buscar </p></li>
                        <li><p><i class="mdi mdi-check mr-1 text-success"></i> Vagas Sempre Atualizadas </p></li>
                        <li><p><i class="mdi mdi-check mr-1 text-success"></i> Vagas em Todo Brasil </p></li>
                      </ul>

                      <div class="alert alert-primary text-center mt-5 py-3" role="alert"> Mais de 300.000 Usuários. 100% GRÁTIS.</div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- ABOUT US END -->


    <!-- blog start -->
    <section class="section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
                <div class="show-results">
                    <div class="float-left">
                        <h5 class="text-dark mb-0 pt-2">Cursos profissionalizantes</h5>
                    </div>
                      <div class="sort-button float-right">
                        <div class="buy-button">
                          <a href="/cursos" class="btn btn-primary"><i class="mdi mdi-briefcase-outline"></i> Ver Todos</a>
                        </div><!--end login button-->
                    </div>
                </div>
            </div>
          </div>
            <div class="row">
                <div
                  v-for="(curso, index) in cursos"
                  :key="index"
                  class="col-lg-4 col-md-6 mt-4 pt-2"
                >
                    <div class="blog position-relative overflow-hidden shadow rounded">
                        <div class="position-relative overflow-hidden">
                            <img :src="`${url}${curso.cover.url}`" class="img-fluid rounded-top" alt=""

                            style="
                                height: 200px !important;
                                width: 100% !important;
                                object-fit: cover !important;
                              "
                            >
                            <div class="overlay rounded-top bg-dark"></div>
                        </div>
                        <div class="content p-4">
                            <h4><a href="javascript:void(0)" class="title text-dark">{{curso.title}}</a></h4>
                            <p class="text-muted">{{curso.description}}</p>
                            <a :href="curso.url" target="_blank" class="text-dark readmore">Ver mais <i class="mdi mdi-chevron-right"></i></a>
                        </div>

                    </div>
                </div><!--end col-->


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
      cursos: [],
      url: process.env.baseUrl,
      estados: [],
      cidades: null,
      vagaTermo: null,
      estadoSelecionado: null,
      cidadeSelecionada: null,
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
    }
  },
  mounted() {

    /* fetch courses */
    this.$axios.$get(`${this.url}/cursos?limit=3`)
    .then(res => {
      res.items.map( (curso, index) => {
        if(index <= 2)
          this.cursos.push(curso)
        return null
      })
    })
    .catch(err => console.trace(err))

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
  },
  methods: {
    realizaBusca(event) {
      /* perform search with provided parameters */
      event.preventDefault()

      window.location = (`/vagas?vaga=${this.vagaTermo || null}&uf=${this.estadoSelecionado || null}&cidade=${this.cidadeSelecionada || null}`)

    }
  }
}
</script>

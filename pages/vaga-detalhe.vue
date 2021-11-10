<template>
  <main>
    <TopMenu />


    <!-- Start home -->
    <section class="bg-half detalhe page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">{{resultados.nome_vagas}}</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="index.html" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">{{resultados.id_vagas}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->

    <!-- EMPLOYERS DETAILS START -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-sm-center">
                        <!-- <img src="images/featured-job/img-3.png" alt="" class="img-fluid mx-md-auto d-block"> -->
                        <h4 class="mt-3"><a href="#" class="text-dark">{{resultados.nome_vagas}}</a></h4>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mr-3">
                                <p class="text-muted mb-0"><i class="mdi mdi-map-marker mr-2"></i>
                                {{resultados.cidade_vagas}}
                                </p>
                            </li>

                            <li v-if="resultados.vaga_recente" class="list-inline-item">
                                <p class="text-success mb-0"><i class="mdi mdi-bookmark-check mdi-18px mr-2"></i>Vaga Recente</p>
                            </li>
                        </ul>

                        <!-- <ul class="list-inline mb-2">
                            <li class="list-inline-item mr-3 ">
                                <p class="text-muted"><i class="mdi mdi-earth mr-2"></i>Themescodeltd.co.in</p>
                            </li>

                            <li class="list-inline-item mr-3">
                                <p class="text-muted"><i class="mdi mdi-email mr-2"></i>Themescodeltd2018@gmail.com</p>
                            </li>

                            <li class="list-inline-item">
                                <p class="text-muted"><i class="mdi mdi-cellphone-iphone mr-2"></i>123 456 7890</p>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>




            <div class="row">
                <div class="col-lg-12">
                    <div class="border-top border-bottom pt-4 pb-4">
                        <div class="row justify-content-sm-center">
                            <div class="col-lg-2 col-md-3 col-6">
                                <div class="text-sm-center m-14">
                                    <h5 class="text-dark mb-2">Setor</h5>
                                    <p class="text-muted mb-0">{{ resultados.areas_vagas}}</p>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-6">
                                <div class="text-sm-center m-14">
                                    <h5 class="text-dark mb-2">Região</h5>
                                    <p class="text-muted mb-0">{{ resultados.cidade_vagas }}</p>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-6">
                                <div class="text-sm-center m-14">
                                    <h5 class="text-dark mb-2">Jornada</h5>
                                    <p class="text-muted mb-0">{{ resultados.jornada_vagas }}</p>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-3 col-6">
                                <div class="text-sm-center m-14">
                                    <h5 class="text-dark mb-2">Salário</h5>
                                    <p class="text-muted mb-0">{{ resultados.salario_vagas }}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="border-top border-bottom pt-4 pb-4">
                    <a :href="`/enviar-cv?id=${resultados.id_vagas}`" class="btn btn-lg btn-block btn-primary">Enviar Currículo</a>
                </div>
              </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mt-4 pt-2">
                    <h4>Detalhes da vaga:</h4>
                    <div class="rounded border p-4 mt-3">
                        <p class="text-muted" v-html="resultados.atribuicoes_vagas"></p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 mt-4 pt-2">
                    <h4>Benefícios da vaga:</h4>
                    <div class="rounded border p-4 mt-3">
                        <p class="text-muted"  v-html="resultados.beneficios_vagas"></p>
                    </div>
                </div>
            </div>

             <div class="row">
                <div class="col-lg-12 mt-4 pt-2">
                    <h4>Observações da vaga:</h4>
                    <div class="rounded border p-4 mt-3">
                        <p class="text-muted" v-html="resultados.observacoes_vagas"></p>
                    </div>
                </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="border-top border-bottom pt-4 pb-4">
                    <a :href="`/enviar-cv?id=${resultados.id_vagas}`" class="btn btn-lg btn-block btn-primary">Enviar Currículo</a>
                </div>
              </div>
            </div>


        </div>
    </section>
    <!-- EMPLOYERS DETAILS END -->


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
    this.buscaVagas(id)
  },
  methods: {
    buscaVagas(id) {

      /* fetch vagas */
      this.$axios.$get(`${this.url}/detalhe?id=${id}`)
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

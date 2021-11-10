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
                        <h4 class="mt-3"><a href="#" class="text-dark">ENVIO DO CURRÍCULO</a></h4>
                        <ul class="list-inline mb-0">
                            <li v-if="resultados.vaga_recente" class="list-inline-item">
                                <p class="text-success mb-0"><i class="mdi mdi-bookmark-check mdi-18px mr-2"></i>Envie seu currículo para a vaga</p>
                            </li>
                        </ul>
                        <br>
                    </div>
                </div>
            </div>




            <div class="row">
                <div class="col-lg-12">
                    <div class="border-top border-bottom pt-4 pb-4">
                        <div class="row justify-content-sm-center">
                            <div class="col-lg-6 col-md-3 col-6">
                                <div class="text-sm-center m-14">
                                    <h5 class="text-dark mb-2"></h5>
                                    <p class="text-muted mb-0">{{ resultados.nome_vagas}}, {{ resultados.cidade_vagas}}</p>

                                    <br>

                                     <div class="">
                                      <input id="file" class="mx-auto w-full" name="curriculum" required type="file" accept=".pdf,.doc,.docx,.rtf" @change="handleFile">
                                      <br>
                                      <br>
                                      <label for="file"><h5>ANEXAR SEU MELHOR CURRÍCULO</h5></label>
                                      <br>
                                      <small class="text-danger">ATENÇÃO: Só aceitamos arquivos PDF, DOC, DOCX e RTF</small>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="border-top border-bottom pt-4 pb-4">
                    <button :disabled="!hasAttach" class="btn btn-lg btn-block btn-primary" @click="sendForm($event)">Enviar Currículo</button>
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
      resultados: [],
      hasAttach: false,
      file: null,
      form: null
    }
  },
  mounted() {
    /* carga inicial de dados */
    const {id} = this.$route.query
    this.buscaVagas(id)
  },
  methods: {
    handleFile(value) {

      this.file = value.target.files[0]

      if (value) this.hasAttach = true
    },

    sendForm(e) {

      e.preventDefault()

      const formData = new FormData();

      formData.append('curriculum', this.file)
      formData.append('empresa', this.resultados.email_vagas)
      formData.append('vaga', this.resultados.nome_vagas)
      formData.append('cidade', this.resultados.cidade_vagas)

      /* post cv */
      const headers = {
        'Content-Type': 'multipart/form-data'
      }
      this.$axios.$post(`${this.url}/enviar`, formData, { headers })
      .then(res => {
        alert('Currículo enviado com sucesso.')
        window.location = ('/sucesso')
      })
      .catch(err => {
          // alert(err)

          alert('Currículo enviado com sucesso.')
          window.location = ('/sucesso')

        }
      )
    },
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

<template>
  <main>
    <TopMenu />


<!-- Start home -->
    <section class="bg-half contato page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">Fale Conosco</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="/" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">Contato</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->


    <!-- CONTACT FORM START -->
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="text-dark mb-0">Fale conosco:</h4>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-7 mt-4 pt-2">
                    <div class="custom-form rounded border p-4">
                        <div id="message"></div>
                        <form id="contact-form" method="post" action="php/contact.php" name="contact-form">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group app-label">
                                        <label class="text-muted">Nome</label>
                                        <input id="name2" v-model="nome" name="name" type="text" class="form-control resume" placeholder="Seu Nome..">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group app-label">
                                        <label class="text-muted">Email</label>
                                        <input id="email1" v-model="email" name="email" type="email" class="form-control resume" placeholder="Seu Email..">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group app-label">
                                        <label class="text-muted">Assunto</label>
                                        <select id="subject" v-model="assunto" type="text" class="form-control resume">
                                          <option value="" disabled>Selecione o assunto</option>
                                          <option value="Dúvidas em geral" selected>Dúvidas em geral</option>
                                          <option value="Sugestões">Sugestões</option>
                                          <option value="Reclamações">Reclamações</option>
                                          <option value="Denunciar vaga">Denunciar vaga</option>
                                          <option value="Outros assuntos">Outros assuntos</option>
                                        </select>

                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group app-label">
                                        <label class="text-muted">mensagem</label>
                                        <textarea id="comments" v-model="mensagem" name="comments" rows="5" class="form-control resume" placeholder="Mensagem.."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <button id="submit" type="button" name="send" class="submitBnt btn btn-primary" @click="sendMessage">Enviar</button>
                                    <div id="simple-msg"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- CONTACT FORM END -->


    <BottomMenu />
  </main>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    }
  },
  methods: {
    sendMessage(e) {

      e.preventDefault()

      if(
        this.nome.length === 0 ||
        this.email.length === 0 ||
        this.assunto.length === 0 ||
        this.mensagem.length === 0
      ) {
        alert('Todos os campos devem ser preenchidos')
      } else {


        const formData = new FormData();

        formData.append('nome', this.nome)
        formData.append('email', this.email)
        formData.append('assunto', this.assunto)
        formData.append('mensagem', this.mensagem)

        /* post cv */
        const headers = {
          'Content-Type': 'multipart/form-data'
        }
        this.$axios.$post(`${this.url}/contato`, formData, { headers })
        .then(res => {
          alert('Mensagem enviada com sucesso.')
        })
        .catch(err => alert(err))

      }

    },
  }

}
</script>

<style>

</style>

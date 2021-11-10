<template>
  <main>
    <div v-if="error.statusCode === 404">
      <TopMenu />

      <!-- Start home -->
      <section class="bg-half blog-cover page-next-level">
          <div class="bg-overlay"></div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-6">
                      <div class="text-center text-white">
                          <h4 class="text-uppercase title mb-4">404</h4>
                          <ul class="page-next d-inline-block mb-0">
                              <li><a href="index.html" class="text-uppercase font-weight-bold">Home</a></li>
                              <li>
                                  <span class="text-uppercase text-white font-weight-bold">404</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <!-- end home -->

      <div class="container mt-5">
        <center>
          <ins class="aso-zone" data-zone="76725"></ins>
          <script data-cfasync="false" async="async" type="text/javascript" src="https://media.aso1.net/js/code.min.js"></script>
        </center>
      </div>

      <div class="w-100 h-full d-flex flex-column text-center justify-content-center py-5">
        <h1 class="py-3">OOPS! CONTEÚDO INDISPONÍVEL</h1>
        <p>Sentimos muito, o conteúdo que tentou acessar não existe!<br />Clique no botão abaixo para buscar outras oportunidades.</p>
        <a href="/vagas" class="btn btn-success w-15 mx-auto mt-3 py-3" >BUSCAR VAGAS</a>
        <br>

        <br>
        <br>
      </div>

    <BottomMenu />
    </div>



  </main>
</template>

<script>
  export default {
    layout: 'error',
    // eslint-disable-next-line vue/require-prop-types
    props: ['error'] // you can set a custom layout for the error page
  }
</script>

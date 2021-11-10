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
                        <h4 class="text-uppercase title mb-4">Política de Privacidade</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="index.html" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">Política de Privacidade</span>
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
              <h4 class="mt-3 text-dark mb-5"><strong>POLÍTICA DE PRIVACIDADE</strong></h4>
              <p v-html="politica.description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <BottomMenu />
  </main>
</template>

<script>
export default {
data() {
    return {
      politica: { description: null},
      url: process.env.baseUrl,
    }
  },
  mounted() {
    /* fetch courses */
    this.$axios.$get(`${this.url}/policies`)
    .then(res => {
      this.politica = res.items
    })
    .catch(err => console.trace(err))

  }
}
</script>

<style>

</style>

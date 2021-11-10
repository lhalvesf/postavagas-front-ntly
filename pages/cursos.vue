<template>
  <main>
    <TopMenu />


       <!-- Start home -->
    <section class="bg-half cursos page-next-level">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="text-center text-white">
                        <h4 class="text-uppercase title mb-4">Cursos Profissionalizates</h4>
                        <ul class="page-next d-inline-block mb-0">
                            <li><a href="/" class="text-uppercase font-weight-bold">Home</a></li>
                            <li>
                                <span class="text-uppercase text-white font-weight-bold">Cursos</span>
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
                <div v-for="(curso, index) in cursos"
                :key="index"
                  class="col-lg-4 col-md-6 mb-4 pb-2"
                >
                    <div class="blog position-relative overflow-hidden shadow rounded">
                        <div class="position-relative overflow-hidden">
                            <img :src="`${url}${curso.cover.url}`" class="rounded-top" alt=""
                              style="
                                height: 200px !important;
                                width: 100% !important;
                                object-fit: cover !important;
                              "
                            >



                            <div class="overlay rounded-top bg-dark"></div>
                            <!-- <div class="likes">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-white like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="text-white comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                </ul>
                            </div> -->
                        </div>
                        <div class="content p-4">
                            <h4><a :href="curso.url" target="_blank" class="title text-dark">{{curso.title}}</a></h4>
                            <p class="text-muted">{{curso.description}}</p>
                            <a :href="curso.url" target="_blank" class="text-dark readmore">Ver Curso<i class="mdi mdi-chevron-right"></i></a>
                        </div>
                        <!-- <div class="author">
                            <p class=" mb-0"><i class="mdi mdi-account text-light"></i> <a href="javascript:void(0)" class="text-light user">Dirio Walls</a></p>
                            <p class="text-light mb-0 date"><i class="mdi mdi-calendar-check"></i> 25 Sep, 2019</p>
                        </div> -->
                    </div>
                </div><!--end col-->

<!--

                <div class="col-lg-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination job-pagination justify-content-center mb-0">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                    <i class="mdi mdi-chevron-double-left f-15"></i>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="mdi mdi-chevron-double-right f-15"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div> -->
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
    }
  },
  mounted() {
    /* fetch courses */
    this.$axios.$get(`${this.url}/cursos?limit=3`)
    .then(res => {
      res.items.map( (curso, index) => {
        this.cursos.push(curso)
        return null
      })
    })
    .catch(err => console.trace(err))

  }
}
</script>

<style>

</style>

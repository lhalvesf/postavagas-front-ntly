<!-- Please remove this file from your project -->
<template>
    <!-- Navigation Bar-->
    <header id="topnav" class="defaultscroll scroll-active">

        <!-- Menu Start -->
        <div class="container">
            <!-- Logo container-->
            <div>
                <a href="/" class="logo">
                    <!-- <img src="images/logo-light.png" alt="" class="logo-light" height="18" /> -->
                    <!-- <img src="images/logo-dark.png" alt="" class="logo-dark" height="18" /> -->
                    <img src="/images/old/logo/logo-novo.png" alt="" height="50" />
                </a>
            </div>
            <div class="buy-button">
                <a id="seeJobs" href="/vagas" class="btn btn-primary"><i class="mdi mdi-briefcase-outline"></i> Ver Vagas</a>
            </div>
            <!--end login button-->
            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" @click="isOpen = !isOpen">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <div id="navigation" :style="isOpen ? 'display: block' : 'display: none'">
                <!-- Navigation Menu-->
                <ul class="navigation-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/vagas">Vagas</a></li>
                    <li><a href="/cursos">Cursos</a></li>
                    <li>
                        <a href="/contato">Contato</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
        <!--end end-->
    </header><!--end header-->
    <!-- Navbar End -->
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isOpen: null,
    }
  },
  mounted() {
    if (window.innerWidth < 992) {
      this.isOpen = false
    } else {
      this.isOpen = true
    }
  }
}
</script>

<style scoped>
  @media(max-width: 600px) {
    #seeJobs { display: none !important; }
  }
</style>

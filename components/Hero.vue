<template>
  <section class="hero">
    <div class="hero__inner relative z-0 overflow-hidden">
      <div class="spotlight-gradient"></div>

      <div class="container px-4 mx-auto md:flex xl:py-20">
        <!-- ANIMATION -->
        <div
          class="hero__imageheroLottie 
          lg:pt-0
          md:order-2
          md:w-1/3 lg:w-1/2
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <lottie :options="lottieOptions" @animCreated="handleAnimation" />
        </div>

        <!-- MAIN  -->
        <div
          class="hero__main pt-12 pb-20 md:px-8 lg:px-16 xl:px-24 md:py-24 lg:py-32 text-center md:text-left"
        >
          <div class="relative z-0">
            <h1
              class="heading1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              Instruire <br class="hidden lg:inline" />
              <span>3DS Max</span>
            </h1>
          </div>
          <p class="">
            <span
              class="text-muted mt-14 inline-block"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-delay="500"
              >De la experți locali din TM, in persoană, pentru:</span
            >

            <vue-typer
              class="visually-hidden block mt-8 text-5xl text-b-orange"
              :text="[
                'Arhitecți.',
                'Designeri de Interior.',
                'Game Designeri.'
              ]"
              erase-style="select-back"
              :eraseDelay="50"
              initial-action="erasing"
              >Arhitecți
              <span class="sr-only"
                >, Designeri de interior, Game Designeri</span
              ></vue-typer
            >
            <br />
            <strong
              class="hero__typeIt text-xl"
              id="typeIt"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-delay="800"
            ></strong>
          </p>
          <p
            class="mt-8 uppercase tracking-wider"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-out"
            data-aos-delay="1500"
          >
            Tu ne spui cu ce problemă 3D te confrunți, <br />
            noi te învățăm cum să o rezolvi.
          </p>
          <div class="mt-12">
            <ButtonC url="/#steps">Află Cum</ButtonC>
            <!-- <a class="[ nav-link nav-link--big ]" href="#"
                ><span>Află Cum</span> ARROW
              </a> -->
          </div>
          <div
            class="hero__ct"
            data-aos="zoom-out-up"
            data-aos-duration="700"
            data-aos-easing="ease-out"
            data-aos-delay="1800"
          >
            <!-- <div class="spotlight-gradient"></div>
            <div class="round-button">
              <div class="round-button-inner">
                <a href="#">
                  ARROWW
                </a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/lottie/hand-pencil.json";

export default {
  components: {
    lottie
  },
  props: {
    heroData: {
      type: Object
    }
  },
  data() {
    return {
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        name: "heroLottie"
      }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>

<style lang="css" scoped>
/* .vue-typer {
  font-family: monospace;
} */

/* .vue-typer .custom.caret {
  width: 10px;
  background-color: #3f51b5;
} */
</style>

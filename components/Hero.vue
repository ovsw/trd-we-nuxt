<template>
  <section class="hero with-sidebar-left-l">
    <div class="hero__inner">
      <div
        class="hero__image border-right [ box-600 ]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="heroLottie">
          <lottie :options="lottieOptions" @animCreated="handleAnimation" />
        </div>
      </div>

      <div class="hero__text [  box-600 md:box-900 border-right flow  ]">
        <div class="large-header  gap-top-900">
          <h1
            class="headline"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            Instruire <br />
            <span>3DS Max</span>
          </h1>
          <div class="radial-gradient"></div>
        </div>
        <p class="gap-top-800">
          <span
            class="text-400 color-muted"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="500"
            >De la experți locali din TM, in persoană, pentru:</span
          >
          <strong class="visually-hidden">Designer de Interior.</strong>
          <br />
          <strong
            class="hero__typeIt text-600 md:text-800"
            id="typeIt"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-delay="800"
          ></strong>
        </p>
        <p
          class="md:gap-top-800"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-easing="ease-out"
          data-aos-delay="1500"
        >
          Tu ne spui cu ce problemă te confrunti, noi te învățăm cum sa o
          rezolvi.
        </p>
        <div
          class="cluster-l"
          data-aos="fade-right"
          data-aos-duration="1400"
          data-aos-easing="ease-out"
          data-aos-delay="1800"
        >
          <div>
            <a class="[ nav-link nav-link--big ]" href="#"
              ><span>Află Cum</span> ARROW
            </a>
          </div>
        </div>

        <div
          class="hero__ct"
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-easing="ease-out"
          data-aos-delay="1800"
        >
          <div class="radial-gradient"></div>
          <div class="round-button">
            <div class="round-button-inner">
              <a href="#">
                ARROW
              </a>
            </div>
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

<style lang="scss" scoped></style>

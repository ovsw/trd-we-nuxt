<template>
  <nav class="fixed z-30 w-full  md:pl-12">
    <div
      class="blurc page-bg-gradient border pl-4 pr-4 sm:pl-6 sm:pr-6 md:pr-0 "
    >
      <div class="flex items-center justify-between h-24">
        <!-- desktop menu wrapper -->
        <div class="menuWrapper flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center">
              <span class="h-20 w-20">
                <lottie
                  :options="lottieOptions"
                  @animCreated="handleAnimation"
                />
              </span>

              <span class="pt-1 text-4xl font-black tracking-wide">Tridia</span>
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="ml-6 flex items-center space-x-2">
              <NuxtLink
                v-for="(navItem, index) in nav"
                :key="index"
                :to="navItem.url"
                class="px-2 lg:px-3 pt-4 lg:text-lg font-medium text-gray-300 hover:text-white  focus:outline-none focus:text-b-orange"
              >
                {{ navItem.name }}
              </NuxtLink>
              <!-- ACTIVE STYLES<a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                >Dashboard</a
              > -->
            </div>
          </div>
        </div>

        <!-- CTA link -->
        <div class="hidden lg:block items-center">
          <NuxtLink to="/inscriere/" class=" flex items-center ">
            <span
              class=" bg-gradient-to-r from-orange-500 to-pink-900 py-8 px-10 uppercase tracking-widest text-xl font-semibold "
              >Înscriere</span
            >
          </NuxtLink>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-light-light hover:text-white  focus:outline-none"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-10 w-10']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-10 w-10']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3 bg-b-purple">
        <!-- ACTIVE STYLES <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >Dashboard</a
        > -->
        <NuxtLink
          v-for="(navItem, index) in nav"
          :key="index"
          :to="navItem.url"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-b-orange focus:outline-none focus:text-white focus:bg-gray-700"
        >
          {{ navItem.name }}
        </NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700 bg-light-light">
        <div class="px-2">
          <a
            href="tel:555-555-555"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-b-orange focus:outline-none focus:text-white focus:bg-gray-700"
            >Sună-ne</a
          >
          <NuxtLink
            to="/inscriere/"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-b-orange focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Inscriere
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- END MOBILE MENU -->
  </nav>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/lottie/tridia-cube-orange.json";
import nav from "@/assets/nav.json";

export default {
  components: {
    lottie
  },
  data() {
    return {
      nav: nav,
      isOpen: false,
      anim: null,
      lottieOptions: {
        animationData: animationData.default,
        name: "heroLottie"
      }
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  },
  mounted() {
    // console.log("height", window.innerHeight);
    // console.log("animation", this.anim);

    const logoAnimation = this.anim;

    var windowSize = {
      w: window.innerWidth,
      h: window.innerHeight
    };

    function scale(num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    }

    window.addEventListener(
      "scroll",
      function(ev) {
        var top = this.scrollY;
        // console.log("top:", top);

        var scaleCalc = scale(top, 0, windowSize.h, 1, 24);

        var frameNumber = scaleCalc < 25 ? scaleCalc : scaleCalc % 24;
        logoAnimation.goToAndStop(frameNumber, true);
      },
      false
    );
  }
};
</script>

<style lang="scss" scoped></style>

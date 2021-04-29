<template>
  <div class="testimonialsSection [ section ]">
    <div class="[ wrapper flow ]">
      <div class="z-0 relative mb-10 ">
        <div class="spotlight-gradient"></div>
        <div class="relative z-10 flex items-end">
          <h2 class="heading2 px-4 lg:px-10">
            Ce spun <strong>cursanții</strong>
          </h2>
          <div class="ml-4 md:ml-10 space-x-2 hidden md:block">
            <button @click="prev">
              <span class="sr-only">înapoi</span>
              <svg-icon
                name="chevron-left-regular"
                title="săgeată stânga"
                height="2em"
                width="2em"
              />
            </button>
            <button @click="next">
              <span class="sr-only">înainte</span>
              <svg-icon
                name="chevron-right-regular"
                title="săgeată dreapta"
                height="2em"
                width="2em"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- swiper -->
      <div v-swiper:testimonialsSwiper="swiperOptions" class="overflow-hidden">
        <div class="[ swiper-wrapper ] ">
          <div
            v-for="item in section.testimonials"
            :key="item._id"
            class="[ swiper-slide ] gridItem card card__white 
            space-y-6  p-10 border-l border-t
            cursor-move
           max-w-sm md:max-w-md
            "
          >
            <img
              :src="
                $urlFor(item.image)
                  .width(200)
                  .height(200)
              "
              class="avatar rounded-full w-24 h-24 md-"
              :alt="item.authorTitle"
            />
            <p class="text-base">“{{ item.text }}”</p>
            <h3 class="text-gray-500">{{ item.authorName }}</h3>
            <p class="[ color-primary ] uppercase text-sm text-gray-300">
              {{ item.authorTitle }}
            </p>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev" ref="prev"></div>
        <div class="swiper-button-next" slot="button-next" ref="next"></div>
      </div>
      <!--  end swiper -->
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import SwiperClass, {
  Navigation,
  Pagination /* add some modules if you need */
} from "swiper";
// configure Swiper to use modules
SwiperClass.use([Navigation, Pagination]);

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  methods: {
    prev() {
      console.log("prev");
      this.$refs.prev.click();
    },
    next() {
      console.log("next");
      this.$refs.next.click();
    }
  }
};
</script>

<style lang="css" scoped>
.gridItem {
}
.swiper-button-prev,
.swiper-button-next {
  top: -10%;
}
</style>

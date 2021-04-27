<template>
  <div class="testimonialsSection [ section ]">
    <div class="[ wrapper flow ]">
      <div class="z-0 relative">
        <h2 class="heading2 mb-20">Ce spun <strong>cursanții</strong></h2>
        <!-- <div class="spotlight-gradient"></div> -->
      </div>

      <div class="nav">
        <button @click="prev">prev</button>

        <button @click="next">next</button>
      </div>

      <!-- swiper -->
      <div v-swiper:testimonialsSwiper="swiperOptions" class="overflow-hidden">
        <div class="[ swiper-wrapper ] ">
          <div
            v-for="item in section.testimonials"
            :key="item._id"
            class="[ swiper-slide ] gridItem card card__white 
            space-y-6  p-10 border-l border-t
            "
          >
            <img
              :src="
                $urlFor(item.image)
                  .width(200)
                  .height(200)
              "
              class="avatar rounded-full"
              :alt="item.authorTitle"
            />
            <p>“{{ item.text }}”</p>
            <h3>{{ item.authorName }}</h3>
            <p class="[ color-primary ] upperCaseText">
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
  max-width: 29%;
}
.swiper-button-prev,
.swiper-button-next {
  top: -10%;
}
</style>

<template>
  <section class="steps section">
    <div class=" max-w-screen-xl mx-auto px-4 md:px-0 md:pr-4">
      <h2
        id="steps"
        class=" max-w-xl mb-20 heading2 relative z-0"
        data-aos-once="true"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {{ section.title1 }} <br /><strong>{{ section.title2 }}</strong>
        <div class="spotlight-gradient"></div>
      </h2>

      <!-- items   -->
      <div
        v-for="(step, index) in section.stepsList"
        :key="index"
        class="steps__item lg:flex pb-12"
      >
        <!-- image -->
        <div
          v-if="step.image.asset"
          class="steps__item-image relative lg:order-3 "
        >
          <div
            class="reveal-cover"
            data-aos="example-anim3"
            data-aos-once="true"
          ></div>
          <img
            :src="$urlFor(step.image).width(600)"
            :alt="step.image.alt"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="0"
            data-aos-delay="500"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- body -->
        <div
          class="steps__item-content flex py-10 md:px-10 flex-1 lg:w-1/2 xl:pr-24"
        >
          <!-- bar -->
          <div class="bar lg:mr-10 xl:mr-20">
            <div
              class="circle rounded-full w-3 h-3 mb-4 border-2 border-b-orange"
            ></div>
            <div v-if="index < 3" class="line"></div>
          </div>

          <!-- Number -->
          <p class="step-number mr-7">
            <svg-icon
              :name="getSvgName(index)"
              :title="getSvgTitle(index)"
              height="3em"
              width="3em"
            />
          </p>

          <!-- text -->
          <div class="steps__item-text space-y-8 ">
            <h3
              class="heading3"
              data-aos-once="false"
              data-aos="fade-left"
              data-aos-duration="1000"
              :data-aos-delay="getTitleAoSDelay(index)"
            >
              {{ step.title0 }}
              <strong>{{ step.title1 }}</strong> {{ step.title2 }}
            </h3>

            <div
              class="flow"
              data-aos="fade-up"
              data-aos-duration="1000"
              :data-aos-delay="getContentAoSDelay(index)"
            >
              <SanityContent :blocks="step.body" class="prose-steps" />
            </div>
          </div>
          <!-- END text -->
        </div>
        <!-- END body -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTitleAoSDelay(index) {
      return 500 * index;
    },
    getContentAoSDelay(index) {
      return 500 * index + 500;
    },
    getSvgName(index) {
      const name = index + 1;
      return `${name}`;
    },
    getSvgTitle(index) {
      return `numarul ${index}`;
    }
  }
};
</script>

<style lang="css" scoped>
.line {
  width: 2px;
  height: 100%;
  margin-left: 5px;
  background: rgb(28, 51, 50) url("~/assets/images/white-line.jpg") repeat-x 75% -10%;
  background-size: 50vh 50vh;
  background-attachment: fixed;
}
</style>

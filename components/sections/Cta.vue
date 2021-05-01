<template>
  <div
    class=" z-10 relative mx-4 md:mx-0 bg-gradient-to-r from-orange-500 to-pink-900"
  >
    <div class="max-w-screen-2xl mx-auto relative">
      <div class="spotlight-gradient"></div>

      <div class=" overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div
          class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 flex items-center"
        >
          <div class="lg:self-center">
            <h2 class="text-3xl  text-white sm:text-4xl">
              <span class="block">{{ section.title }}</span>
              <span
                v-if="section.subTitle"
                class="block text-b-purple font-extrabold mt-2"
                >{{ section.subTitle }}</span
              >
            </h2>
            <p class="mt-4 md:mt-8 text-lg leading-6 text-orange-50">
              {{ section.text }}
            </p>
            <div class="mt-8">
              <ButtonC
                :url="`${button.url}/`"
                class=" mr-6"
                v-for="button in section.buttons"
                :key="button._key"
              >
                {{ button.text }}
              </ButtonC>
            </div>
          </div>
        </div>
        <div class=" aspect-w-5 aspect-h-3 md:aspect-w-3 md:aspect-h-2 my-10">
          <img
            class="shadow-md transform translate-x-6 translate-y-6 rounded-lg object-cover sm:translate-x-0 lg:translate-y-0"
            :src="
              $urlFor(section.image)
                .width(1200)
                .height(800)
            "
            :alt="section.image.alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

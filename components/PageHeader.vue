<template>
  <div class="relative z-0 overflow-hidden -mb-24 md:-mb-36">
    <div class="spotlight-gradient"></div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-36 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1>
          <span
            class=" block text-base font-semibold text-b-orange opacity-70 tracking-widest uppercase"
          >
            <template v-if="longTitle != ''">
              {{ title }}
            </template>
            <template v-else>
              Tridia
            </template>
          </span>
          <span
            class="block mt-5 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl max-w-5xl mx-auto "
          >
            <span v-if="longTitle != ''" class="leading-normal">
              {{ longTitle }}
            </span>
            <span v-else>{{ title }}</span>
          </span>
        </h1>
        <p :v-if="intro" class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {{ intro }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "missing title"
    },
    longTitle: {
      type: String,
      default: ""
    },
    intro: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>

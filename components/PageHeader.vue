<template>
  <div class="relative z-0 overflow-hidden -mb-28">
    <div class="spotlight-gradient"></div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-36 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1
          class="text-base font-semibold text-b-orange opacity-70 tracking-widest uppercase"
        >
          {{ title }}
        </h1>
        <h2
          class="mt-5 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl max-w-5xl mx-auto"
        >
          {{ longTitle }}
        </h2>
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
      default: "missing long title"
    },
    intro: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>

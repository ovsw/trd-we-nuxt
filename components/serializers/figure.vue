<template>
  <figure>
    <img
      :src="
        $urlFor({ asset })
          .width(1310)
          .height(873)
      "
      width="1310"
      height="873"
      :alt="alt"
    />

    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    alt: {
      alt: String,
      required: true
    },
    caption: {
      alt: String
    },
    asset: {
      typpe: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>

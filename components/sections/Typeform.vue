<template>
  <div class="section border">
    <!-- {{ section.formUrl }} -->
    <Typeform
      class=" h-screen w-full top-0 left-0 right-0"
      :opacity="100"
      :url="section.formUrl"
    />
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

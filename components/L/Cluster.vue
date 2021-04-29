<template>
  <component :is="wrapper" class="cluster-l" :class="classObject">
    <div>
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    wrapper: {
      type: String,
      default: "div"
    },
    justify: {
      type: String,
      default: "center"
    },
    alignItems: {
      type: String,
      default: "center"
    }
  },
  computed: {
    classObject: function() {
      return {
        "justify-end": this.justify == "flex-end"
      };
    }
  }
};
</script>

<style lang="css" scoped>
/* .cluster-l > * {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: calc(var(--spacing, 1rem) / 2 * -1);
}

.cluster-l > * > * {
  margin: calc(var(--spacing, 1rem) / 2);
}
.justify-end > * {
  justify-content: flex-end !important;
} */
</style>

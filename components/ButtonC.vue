<template>
  <component
    v-bind="linkProps(url)"
    class="button relative pb-4 overflow-hidden  text-light-light text-lg inline-flex items-baseline uppercase"
  >
    <span class="relative inset-y-0.5 mr-2">
      <slot></slot>
    </span>
    <svg-icon
      name="arrow-diag-light"
      title="chevron right icon"
      height="1em"
      width="1em"
    />
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "/"
    }
  },
  methods: {
    linkProps(url) {
      if (
        url.match(/((mailto:\w+)|(tel:\w+)|(http:\/\/\w+)|(https:\/\/\w+)).+/)
      ) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener"
        };
      }
      return {
        is: "NuxtLink",
        to: `${url}`
      };
    }
  }
};
</script>

<style lang="css" scoped>
.button:before {
  content: "";
  width: 100%;
  height: 2px;
  left: -100%;
  position: absolute;
  transition: all 0.35s ease-Out;
  bottom: 0;
  z-index: 1;
  background-color: white;
}
.button:hover:before {
  left: 0;
}
.button span {
  transition: all 0.35s ease-out;
}
.button:hover span {
  margin-left: 1rem;
}
</style>

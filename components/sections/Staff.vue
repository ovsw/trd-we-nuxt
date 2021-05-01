<template>
  <div class="staffSection section px-4">
    <div class="container mx-auto">
      <div class=" space-y-10">
        <div
          v-if="section.title1 || section.title2"
          class="flow relative flow-space-400 z-0 px-4 md:px-10"
        >
          <h2 class="heading2 max-w-lg">
            <strong>{{ section.title1 }}</strong>
            {{ section.title2 }}
          </h2>
          <div class="spotlight-gradient"></div>
          <SanityContent
            v-if="section.text"
            :blocks="section.text"
            class="mt-10"
          />
        </div>

        <div
          class="staffSection__wrapper [ auto-grid ] relative z-10"
          style="--auto-grid-gap:3rem; --auto-grid-min-size: 17rem;"
        >
          <!-- <div v-for="card in section.staffList" :key="card._id">
          {{ card }}
        </div> -->
          <CardStaff
            v-for="(card, index) in section.staffList"
            :key="index"
            :index="index"
            :card="card"
          />
        </div>

        <!-- <ButtonC
          v-for="(button, index) in section.buttons"
          :key="index"
          :url="button.url"
          >{{ button.text }}</ButtonC
        > -->
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

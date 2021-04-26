<template>
  <div
    class="[ staff-card ]"
    data-aos-once="true"
    data-aos="fade-up"
    data-aos-delay=""
    data-aos-duration="1000"
  >
    <div class="staffSection__cardImage tooltipContainer relative">
      <span class="tooltip" />
      <!-- image -->
      <img
        :src="
          $urlFor(card.content.image)
            .width(400)
            .height(500)
        "
        class=" object-cover w-full h-full"
        :alt="card.content.name"
      />
    </div>

    <div class="cardText relative p-5 mr-4 -mt-9 space-y-10">
      <!-- title -->
      <h3 class="heading3">
        <span class="font-black">{{ staffMemberNameArr[0] }}</span>
        {{ staffMemberNameArr[1] }}
      </h3>
      <p class="uppercase text-base">{{ card.content.role }}</p>

      <!-- <p class="measure-30">{{ card.content.shortBio }}</p> -->

      <!-- read more link -->
      <div>
        <ButtonC class="[ nav-link mt-10 ]" to="/">
          Citeste despre {{ staffMemberNameArr[0] }}
        </ButtonC>
      </div>
      <!-- END read more link -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    staffMemberNameArr() {
      return this.card.content.name.split(" ");
    }
  },
  methods: {
    getAosDelay(index) {
      return index * 500;
    }
  }
};
</script>

<style lang="css" scoped>
.cardText {
  box-shadow: 0 0 60px rgba(12, 33, 35, 0.9), 0 0 20px rgba(12, 33, 35, 0.6);
}
.staff-card:first-child > div {
  background-color: #126078;
}

.staff-card:nth-child(2) > div {
  background-color: #af7763;
}

.staff-card:nth-child(3) > div {
  background-color: #732b31;
}

.staff-card:nth-child(4) > div {
  background-color: #646b58;
}
</style>

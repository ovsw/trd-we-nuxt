<template>
  <div>
    <component
      v-for="section in sections"
      :is="getComponentFromSectionType(section._type)"
      :key="section._key"
      :section="section"
    />
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    getComponentFromSectionType(sectionType) {
      if (sectionType == "stepsSection") {
        return "SectionsSteps";
      } else if (sectionType == "staffSection") {
        return "SectionsStaff";
      } else if (sectionType == "reusedSection") {
        return "SectionsReused";
      } else if (sectionType == "featCoursesSection") {
        return "SectionsFeaturedCourses";
      } else if (sectionType == "testimonialsSection") {
        return "SectionsTestimonials";
      }
      return "SectionsDefault";
    }
  }
};
</script>

<style lang="scss" scoped></style>

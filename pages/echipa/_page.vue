<template>
  <div>
    <PageHeader
      title="Echipa Tridia"
      :longTitle="page.content.name"
      :intro="page.content.title"
    />

    <SectionsRte :section="sectionMock" />
  </div>
</template>

<script>
const query = /* groq */ `
{ 
  "page": *[(_type == 'staffMember') && content.slug.current == $slug][0] {
          ...,
          content {
  					...,
          }
        }
}
`;

export default {
  name: "StaffMemberPage",
  scrollToTop: true,

  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.staffSlugs.includes(params.page)
    );
  },

  asyncData({ $sanity, params, payload }) {
    if (payload) {
      return { page: payload };
    }
    return $sanity.fetch(query, {
      slug: params.page
    });
  },
  computed: {
    sectionMock() {
      return {
        text: this.page.content.bio
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>

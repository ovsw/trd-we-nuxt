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
  "page": *[(_type == 'staffMember') && content.slug.current == $slug][0]
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

  computed: {
    sectionMock() {
      return {
        text: this.page.content.bio
      };
    },
    seoTitle() {
      if (this.page.content.seo.title) return this.page.content.seo.title;
      return undefined;
    },
    seoDescription() {
      if (this.page.content.seo.description)
        return this.page.content.seo.description;
      return undefined;
    },
    seoImage() {
      return undefined;
    },
    seoPageUrl() {
      return `https://tridia.ro/echipa/${this.page.content.slug.current}/`;
    },
    seoShareImage() {
      return undefined;
    }
  },

  head() {
    return {
      title: this.seoTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoDescription
        },
        {
          hid: "ogtitle",
          name: "og:title",
          content: this.seoTitle
        },
        {
          hid: "ogdescription",
          name: "og:description",
          content: this.seoDescription
        },
        {
          hid: "ogimage",
          name: "og:image",
          content: this.seoShareImage
        },
        {
          hid: "ogurl",
          name: "og:url",
          content: this.seoPageUrl
        }
      ],
      link: [{ rel: "cannonical", href: this.seoPageUrl }],
      __dangerouslyDisableSanitizersByTagID: {
        ogimage: ["content"]
      }
    };
  },

  asyncData({ $sanity, params, payload }) {
    if (payload) {
      return { page: payload };
    }
    return $sanity.fetch(query, {
      slug: params.page
    });
  }
};
</script>

<style lang="scss" scoped></style>

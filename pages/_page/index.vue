<template>
  <div>
    <PageHeader
      :title="page.content.title"
      :longTitle="page.content.longTitle"
      :intro="page.content.intro"
    />

    <SectionsRenderer :sections="page.content.sections1" />
  </div>
</template>

<script>
const query = /* groq */ `
{
  "page": *[(_type == 'page') && content.slug.current == $slug][0] {
          ...,
          content {
  					...,
            sections1[]{
              ...,
              _type == 'staffSection' => {
                ...,
                staffList[]->{
                  ...
                }
              }
            }

          }
        }
}
`;

export default {
  name: "Page",

  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.pagesSlugs.includes(params.page)
    );
  },
  computed: {
    seoTitle() {
      if (this.page.content.seo && this.page.content.seo.title)
        return this.page.content.seo.title;
      return undefined;
    },
    seoDescription() {
      if (this.page.content.seo && this.page.content.seo.description)
        return this.page.content.seo.description;
      return undefined;
    },
    seoImage() {
      return undefined;
    },
    seoPageUrl() {
      return `https://tridia.ro/${this.page.content.slug.current}/`;
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

<template>
  <div>
    <PageHeader
      title="Blog"
      longTitle="Tutoriale, Știri, Noutăți 3D"
      intro=""
    />
    <PostsListing :posts="posts" :showHeader="false" />

    <!-- <SectionsRenderer :sections="page.content.sections1" /> -->
  </div>
</template>

<script>
const query = /* groq */ `
{ 
  "posts": *[_type == 'post'] [0..2] | order(content.date desc),
  "blogHome": *[_id == 'blogHome'][0]
}
`;

export default {
  name: "Page",
  scrollToTop: true,

  computed: {
    seoTitle() {
      if (this.blogHome.content.seo && this.blogHome.content.seo.title)
        return this.blogHome.content.seo.title;
      return undefined;
    },
    seoDescription() {
      if (this.blogHome.content.seo && this.blogHome.content.seo.description)
        return this.blogHome.content.seo.description;
      return undefined;
    },
    seoImage() {
      return undefined;
    },
    seoblogHomeUrl() {
      return `https://tridia.ro/blog/`;
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
    const sanityCall = $sanity.fetch(query);
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall;
  }
};
</script>

<style lang="scss" scoped></style>

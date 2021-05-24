<template>
  <div>
    <Hero />
    <Partners />
    <SectionsRenderer :sections="siteHome.content.sections.sections" />
    <PostsListing :posts="featuredPosts" />
  </div>
</template>

<script>
const query = /* groq */ `
{
  "siteHome": *[_type == 'siteHome'] {
    ...,
    content {
      ...,
      sections {
        sections[]{
  				...,
  				_type == 'testimonialsSection' => {
  					...,
  					testimonials[]->{
              ...
            }
					}
				}
      }
    }
  }[0],
  "featuredPosts": *[_type == 'post'] [0..2] | order(content.date desc)
}
`;

export default {
  name: "siteHome",
  scrollToTop: true,

  computed: {
    seoTitle() {
      if (this.siteHome.content.seo.title)
        return this.siteHome.content.seo.title;
      return undefined;
    },
    seoDescription() {
      if (this.siteHome.content.seo.description)
        return this.siteHome.content.seo.description;
      return undefined;
    },
    seoImage() {
      return undefined;
    },
    seositeHomeUrl() {
      return `https://tridia.ro/`;
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

  asyncData({ $sanity }) {
    const sanityCall = $sanity.fetch(query);
    // console.log("🎈 asyncData: called", sanityCall);
    return sanityCall;
  }
};
</script>

<style></style>
